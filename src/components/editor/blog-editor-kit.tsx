"use client";

import { AlignKit } from "@/components/editor/plugins/align-kit";
import { BasicNodesKit } from "@/components/editor/plugins/basic-nodes-kit";
import { CodeBlockKit } from "@/components/editor/plugins/code-block-kit";
import { IndentKit } from "@/components/editor/plugins/indent-kit";
import { LinkKit } from "@/components/editor/plugins/link-kit";
import { ListKit } from "@/components/editor/plugins/list-kit";
import { MediaKit } from "@/components/editor/plugins/media-kit";

export const BlogEditorKit = [
  ...BasicNodesKit,
  ...CodeBlockKit,
  ...ListKit,
  ...LinkKit,
  ...MediaKit,
  ...IndentKit,
  ...AlignKit,
];
