export type AvatarUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export function getInitials(user: AvatarUser): string {
  const source = user.name?.trim() || user.email?.split("@")[0] || "U";
  const parts = source.split(/\s+/).filter(Boolean);

  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }

  return source.slice(0, 2).toUpperCase();
}

export function getAvatarColor(seed: string): string {
  const colors = [
    "bg-emerald-600",
    "bg-teal-600",
    "bg-cyan-600",
    "bg-sky-600",
    "bg-indigo-600",
    "bg-violet-600",
  ];

  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
}
