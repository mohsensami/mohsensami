import Link from 'next/link';
import { LoginForm } from '@/components/LoginForm';
import { SocialLoginButtons } from '@/components/SocialLoginButtons';

export const metadata = {
    title: 'ورود',
};

type Props = {
    searchParams: Promise<{ callbackUrl?: string }>;
};

export default async function LoginPage({ searchParams }: Props) {
    const { callbackUrl } = await searchParams;
    const redirectTo = callbackUrl || '/';

    const googleEnabled = !!(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);
    const githubEnabled = !!(process.env.AUTH_GITHUB_ID && process.env.AUTH_GITHUB_SECRET);

    return (
        <main className=" w-full px-4 py-12">
            <div className="flex flex-col items-center">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-bold text-stone-900">ورود به دیتای سبز</h1>
                    <p className="mt-2 text-sm text-stone-600">
                        حساب نداری؟{' '}
                        <Link href="/register" className="font-medium text-emerald-600 hover:text-emerald-800">
                            ثبت‌نام کن
                        </Link>
                    </p>
                </div>

                <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                    <LoginForm callbackUrl={redirectTo} />
                    <SocialLoginButtons googleEnabled={googleEnabled} githubEnabled={githubEnabled} />
                    <p className="mt-6 rounded-lg bg-stone-50 px-3 py-2 text-xs text-stone-500">
                        حساب دمو: ali@example.com / 123456
                    </p>
                </section>
            </div>
        </main>
    );
}
