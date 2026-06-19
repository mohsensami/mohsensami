import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";
import { getDb } from "./db";
import { users } from "./db/schema";

const SESSION_COOKIE = "dev-blog-session";
const secret = new TextEncoder().encode(
  process.env.AUTH_SECRET || "dev-blog-secret-change-in-production",
);

export type SessionUser = {
  id: number;
  name: string;
  email: string;
};

async function createToken(user: SessionUser): Promise<string> {
  return new SignJWT({ user })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(secret);
}

export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, secret);
    return (payload.user as SessionUser) ?? null;
  } catch {
    return null;
  }
}

export async function registerUser(
  name: string,
  email: string,
  password: string,
): Promise<{ user?: SessionUser; error?: string }> {
  const db = getDb();

  const existing = db
    .select()
    .from(users)
    .where(eq(users.email, email.toLowerCase()))
    .get();

  if (existing) {
    return { error: "این ایمیل قبلاً ثبت شده است" };
  }

  if (password.length < 6) {
    return { error: "رمز عبور باید حداقل ۶ کاراکتر باشد" };
  }

  const passwordHash = bcrypt.hashSync(password, 10);
  const [user] = db
    .insert(users)
    .values({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      passwordHash,
    })
    .returning()
    .all();

  const sessionUser: SessionUser = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  const token = await createToken(sessionUser);
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return { user: sessionUser };
}

export async function loginUser(
  email: string,
  password: string,
): Promise<{ user?: SessionUser; error?: string }> {
  const db = getDb();
  const user = db
    .select()
    .from(users)
    .where(eq(users.email, email.toLowerCase().trim()))
    .get();

  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return { error: "ایمیل یا رمز عبور اشتباه است" };
  }

  const sessionUser: SessionUser = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  const token = await createToken(sessionUser);
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return { user: sessionUser };
}

export async function logoutUser(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}
