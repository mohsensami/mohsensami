import Link from "next/link";

type HomeSectionTitleProps = {
  title: string;
  href?: string;
  linkLabel?: string;
};

export function HomeSectionTitle({ title, href, linkLabel }: HomeSectionTitleProps) {
  return (
    <div className="mb-6 flex items-center justify-between border-b border-stone-200 pb-3 dark:border-stone-800">
      <h2 className="flex items-center gap-2.5 text-xl font-bold text-stone-900 dark:text-stone-100">
        <span className="h-6 w-1 rounded-full bg-emerald-500" />
        {title}
      </h2>
      {href && linkLabel && (
        <Link
          href={href}
          className="text-sm font-medium text-emerald-600 transition hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
