"use client";

import { useCallback, useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { createEditorExtensions } from "./extensions";
import { EditorToolbar } from "./EditorToolbar";
import { uploadImageFile } from "@/components/ImageUploadField";

type RichTextEditorProps = {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
};

export function RichTextEditor({
  content,
  onChange,
  placeholder = "مقاله خود را بنویسید...",
}: RichTextEditorProps) {
  const [isHtmlMode, setIsHtmlMode] = useState(false);
  const [htmlSource, setHtmlSource] = useState(content);

  const editor = useEditor({
    extensions: createEditorExtensions(placeholder),
    content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "prose-editor min-h-80 max-w-none px-4 py-3 focus:outline-none dark:prose-invert",
      },
    },
    onUpdate: ({ editor: currentEditor }) => {
      const html = currentEditor.getHTML();
      onChange(html);
      setHtmlSource(html);
    },
  });

  useEffect(() => {
    if (!editor || isHtmlMode) return;
    if (editor.getHTML() !== content) {
      editor.commands.setContent(content, { emitUpdate: false });
      setHtmlSource(content);
    }
  }, [content, editor, isHtmlMode]);

  const handleToggleHtmlMode = useCallback(() => {
    if (isHtmlMode) {
      editor?.commands.setContent(htmlSource, { emitUpdate: false });
      onChange(htmlSource);
      setIsHtmlMode(false);
      return;
    }

    const currentHtml = editor?.getHTML() ?? content;
    setHtmlSource(currentHtml);
    setIsHtmlMode(true);
  }, [content, editor, htmlSource, isHtmlMode, onChange]);

  const handleHtmlChange = useCallback(
    (value: string) => {
      setHtmlSource(value);
      onChange(value);
    },
    [onChange],
  );

  const handleInsertImage = useCallback(async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg,image/png,image/webp,image/gif";

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file || !editor) return;

      try {
        const url = await uploadImageFile(file);
        editor.chain().focus().setImage({ src: url }).run();
      } catch {
        window.alert("خطا در آپلود تصویر");
      }
    };

    input.click();
  }, [editor]);

  if (!editor) {
    return (
      <div className="flex h-96 items-center justify-center rounded-xl border border-stone-200 text-sm text-stone-500 dark:border-stone-700">
        در حال بارگذاری ادیتور...
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-stone-200 dark:border-stone-700">
      <EditorToolbar
        editor={editor}
        isHtmlMode={isHtmlMode}
        onToggleHtmlMode={handleToggleHtmlMode}
        onInsertImage={handleInsertImage}
      />

      {isHtmlMode ? (
        <textarea
          value={htmlSource}
          onChange={(e) => handleHtmlChange(e.target.value)}
          dir="ltr"
          className="min-h-80 w-full resize-y bg-stone-950 p-4 font-mono text-sm leading-7 text-emerald-100 focus:outline-none"
          placeholder="<p>HTML content...</p>"
        />
      ) : (
        <EditorContent editor={editor} />
      )}
    </div>
  );
}
