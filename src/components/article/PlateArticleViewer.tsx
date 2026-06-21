"use client";

import { useMemo } from "react";

import { createStaticEditor } from "platejs/static";

import { EditorStatic } from "@/components/ui/editor-static";
import { BlogStaticKit } from "@/components/editor/blog-static-kit";
import { parsePlateContent } from "@/lib/format";

export function PlateArticleViewer({ content }: { content: string }) {
  const value = useMemo(() => parsePlateContent(content), [content]);
  const editor = useMemo(
    () => createStaticEditor({ plugins: BlogStaticKit, value }),
    [value],
  );

  return (
    <EditorStatic
      editor={editor}
      value={value}
      className="prose-content px-0 text-base leading-8 text-stone-800 dark:text-stone-200"
      variant="none"
    />
  );
}
