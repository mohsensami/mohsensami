"use client";

import { useMemo } from "react";

import { Plate, usePlateEditor } from "platejs/react";

import { BlogEditorKit } from "@/components/editor/blog-editor-kit";
import { BlogEditorToolbar } from "@/components/editor/BlogEditorToolbar";
import { Editor, EditorContainer } from "@/components/ui/editor";
import { isEmptyPlateContent, isPlateJson, parsePlateContent } from "@/lib/format";

type BlogPlateEditorProps = {
  content: string;
  onChange: (value: string) => void;
  editorKey?: string | number;
  placeholder?: string;
};

export function BlogPlateEditor({
  content,
  onChange,
  editorKey,
  placeholder = "متن مقاله را بنویسید...",
}: BlogPlateEditorProps) {
  const initialValue = useMemo(
    () => parsePlateContent(content),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reset editor when post changes
    [editorKey],
  );

  const editor = usePlateEditor({
    plugins: BlogEditorKit,
    value: initialValue,
  });

  const showLegacyNotice =
    Boolean(editorKey) && content.trim().length > 0 && !isPlateJson(content);

  return (
    <div className="overflow-hidden rounded-lg border border-stone-200 dark:border-stone-700">
      {showLegacyNotice && (
        <div className="border-b border-amber-200 bg-amber-50 px-4 py-2 text-xs text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200">
          این مقاله با فرمت قدیمی ذخیره شده. با ویرایش و ذخیره، به ادیتور جدید تبدیل می‌شود.
        </div>
      )}

      <Plate
        editor={editor}
        onValueChange={({ value }) => onChange(JSON.stringify(value))}
      >
        <BlogEditorToolbar />
        <EditorContainer variant="default" className="max-h-[720px] min-h-[420px]">
          <Editor
            variant="fullWidth"
            className="px-4 py-3 text-base sm:px-6"
            placeholder={placeholder}
          />
        </EditorContainer>
      </Plate>
    </div>
  );
}
