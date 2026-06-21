"use client";

import { insertCodeBlock } from "@platejs/code-block";
import { BracesIcon } from "lucide-react";
import { useEditorRef } from "platejs/react";

import { ToolbarButton } from "./toolbar";

export function CodeBlockToolbarButton(
  props: React.ComponentProps<typeof ToolbarButton>,
) {
  const editor = useEditorRef();

  return (
    <ToolbarButton
      {...props}
      tooltip="بلوک کد"
      onClick={() => {
        insertCodeBlock(editor);
        editor.tf.focus();
      }}
    >
      <BracesIcon />
    </ToolbarButton>
  );
}
