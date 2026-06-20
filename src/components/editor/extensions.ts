import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
import { createLowlight, common } from "lowlight";

export const lowlight = createLowlight(common);

export const CODE_LANGUAGES = [
  { value: "typescript", label: "TypeScript" },
  { value: "javascript", label: "JavaScript" },
  { value: "tsx", label: "TSX" },
  { value: "jsx", label: "JSX" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "json", label: "JSON" },
  { value: "bash", label: "Bash" },
  { value: "python", label: "Python" },
  { value: "sql", label: "SQL" },
  { value: "markdown", label: "Markdown" },
] as const;

export function createEditorExtensions(placeholder: string) {
  return [
    StarterKit.configure({
      codeBlock: false,
      heading: { levels: [1, 2, 3, 4] },
    }),
    Underline,
    Highlight,
    TextAlign.configure({ types: ["heading", "paragraph"] }),
    Link.configure({
      openOnClick: false,
      HTMLAttributes: { rel: "noopener noreferrer", target: "_blank" },
    }),
    Image.configure({ inline: false, allowBase64: false }),
    CodeBlockLowlight.configure({
      lowlight,
      defaultLanguage: "typescript",
      HTMLAttributes: { class: "code-block" },
    }),
    Placeholder.configure({ placeholder }),
  ];
}
