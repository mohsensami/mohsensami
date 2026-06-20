"use client";

import Image from "next/image";
import { getAvatarColor, getInitials, type AvatarUser } from "@/lib/avatar";

type UserAvatarProps = {
  user: AvatarUser;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: { px: 32, text: "text-xs" },
  md: { px: 40, text: "text-sm" },
  lg: { px: 56, text: "text-base" },
};

export function UserAvatar({ user, size = "md", className = "" }: UserAvatarProps) {
  const { px, text } = sizeMap[size];
  const seed = user.email ?? user.name ?? "user";

  if (user.image) {
    return (
      <Image
        src={user.image}
        alt={user.name ?? "کاربر"}
        width={px}
        height={px}
        unoptimized
        className={`rounded-full object-cover ${className}`}
        style={{ width: px, height: px }}
      />
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-bold text-white ${getAvatarColor(seed)} ${text} ${className}`}
      style={{ width: px, height: px }}
      aria-hidden
    >
      {getInitials(user)}
    </div>
  );
}
