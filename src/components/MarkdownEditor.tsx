"use client";

import dynamic from "next/dynamic";

const MarkdownEditorInner = dynamic(
  () => import("./MarkdownEditorInner").then((m) => m.MarkdownEditorInner),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-96 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-sm text-stone-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400">
        در حال بارگذاری ادیتور...
      </div>
    ),
  },
);

type MarkdownEditorProps = {
  markdown: string;
  onChange: (markdown: string) => void;
};

export function MarkdownEditor({ markdown, onChange }: MarkdownEditorProps) {
  return <MarkdownEditorInner markdown={markdown} onChange={onChange} />;
}
