"use client";

import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
  linkPlugin,
  imagePlugin,
  tablePlugin,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  CreateLink,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  CodeToggle,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { uploadImageFile } from "./ImageUploadField";

type Props = {
  markdown: string;
  onChange: (markdown: string) => void;
};

export function MarkdownEditorInner({ markdown, onChange }: Props) {
  return (
    <div className="mdx-editor-wrapper overflow-hidden rounded-xl border border-stone-200 dark:border-stone-700">
      <MDXEditor
        markdown={markdown}
        onChange={onChange}
        contentEditableClassName="prose-editor min-h-80 px-4 py-3 font-sans text-base leading-8 text-stone-800 dark:text-stone-200"
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          markdownShortcutPlugin(),
          linkPlugin(),
          imagePlugin({
            imageUploadHandler: uploadImageFile,
          }),
          tablePlugin(),
          codeBlockPlugin({ defaultCodeBlockLanguage: "tsx" }),
          codeMirrorPlugin({
            codeBlockLanguages: {
              js: "JavaScript",
              javascript: "JavaScript",
              ts: "TypeScript",
              tsx: "TSX",
              jsx: "JSX",
              css: "CSS",
              html: "HTML",
              json: "JSON",
              bash: "Bash",
              shell: "Shell",
              python: "Python",
              sql: "SQL",
              md: "Markdown",
            },
          }),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <CodeToggle />
                <BlockTypeSelect />
                <ListsToggle />
                <CreateLink />
                <InsertImage />
                <InsertTable />
                <InsertThematicBreak />
              </>
            ),
          }),
        ]}
      />
    </div>
  );
}
