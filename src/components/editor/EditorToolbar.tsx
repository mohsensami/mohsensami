"use client";

import type { Editor } from "@tiptap/react";
import { CODE_LANGUAGES } from "./extensions";

type EditorToolbarProps = {
  editor: Editor;
  isHtmlMode: boolean;
  onToggleHtmlMode: () => void;
  onInsertImage: () => void;
};

function ToolbarButton({
  onClick,
  active,
  disabled,
  children,
  title,
}: {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  title: string;
}) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`rounded-md px-2 py-1.5 text-sm transition ${
        active
          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
          : "text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800"
      } disabled:opacity-40`}
    >
      {children}
    </button>
  );
}

export function EditorToolbar({
  editor,
  isHtmlMode,
  onToggleHtmlMode,
  onInsertImage,
}: EditorToolbarProps) {
  if (isHtmlMode) {
    return (
      <div className="flex flex-wrap items-center gap-1 border-b border-stone-200 bg-stone-50 p-2 dark:border-stone-700 dark:bg-stone-900">
        <ToolbarButton onClick={onToggleHtmlMode} title="بازگشت به ادیتور">
          ← ادیتور
        </ToolbarButton>
      </div>
    );
  }

  const currentLanguage =
    editor.getAttributes("codeBlock").language ?? "typescript";

  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-stone-200 bg-stone-50 p-2 dark:border-stone-700 dark:bg-stone-900">
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        active={editor.isActive("bold")}
        title="Bold"
      >
        <strong>B</strong>
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        active={editor.isActive("italic")}
        title="Italic"
      >
        <em>I</em>
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        active={editor.isActive("underline")}
        title="Underline"
      >
        <u>U</u>
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        active={editor.isActive("highlight")}
        title="Highlight"
      >
        H
      </ToolbarButton>

      <span className="mx-1 h-5 w-px bg-stone-300 dark:bg-stone-600" />

      {[1, 2, 3].map((level) => (
        <ToolbarButton
          key={level}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: level as 1 | 2 | 3 }).run()
          }
          active={editor.isActive("heading", { level })}
          title={`Heading ${level}`}
        >
          H{level}
        </ToolbarButton>
      ))}

      <span className="mx-1 h-5 w-px bg-stone-300 dark:bg-stone-600" />

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        active={editor.isActive("bulletList")}
        title="Bullet list"
      >
        • List
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        active={editor.isActive("orderedList")}
        title="Ordered list"
      >
        1. List
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        active={editor.isActive("blockquote")}
        title="Quote"
      >
        ❝
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleCode().run()}
        active={editor.isActive("code")}
        title="Inline code"
      >
        {"</>"}
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        active={editor.isActive("codeBlock")}
        title="Code block"
      >
        {"{ }"}
      </ToolbarButton>

      <select
        value={currentLanguage}
        onChange={(e) =>
          editor.chain().focus().updateAttributes("codeBlock", { language: e.target.value }).run()
        }
        className="rounded-md border border-stone-200 bg-white px-2 py-1 text-xs dark:border-stone-600 dark:bg-stone-800 dark:text-stone-200"
        title="Code language"
      >
        {CODE_LANGUAGES.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>

      <span className="mx-1 h-5 w-px bg-stone-300 dark:bg-stone-600" />

      <ToolbarButton
        onClick={() => {
          const url = window.prompt("آدرس لینک:");
          if (url) editor.chain().focus().setLink({ href: url }).run();
        }}
        active={editor.isActive("link")}
        title="Link"
      >
        🔗
      </ToolbarButton>
      <ToolbarButton onClick={onInsertImage} title="Image">
        🖼
      </ToolbarButton>

      <span className="mx-1 h-5 w-px bg-stone-300 dark:bg-stone-600" />

      <ToolbarButton onClick={onToggleHtmlMode} title="Edit HTML">
        HTML
      </ToolbarButton>
    </div>
  );
}
