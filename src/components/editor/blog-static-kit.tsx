import { BaseAlignKit } from "@/components/editor/plugins/align-base-kit";
import { BaseBasicBlocksKit } from "@/components/editor/plugins/basic-blocks-base-kit";
import { BaseBasicMarksKit } from "@/components/editor/plugins/basic-marks-base-kit";
import { BaseCodeBlockKit } from "@/components/editor/plugins/code-block-base-kit";
import { BaseIndentKit } from "@/components/editor/plugins/indent-base-kit";
import { BaseLinkKit } from "@/components/editor/plugins/link-base-kit";
import { BaseListKit } from "@/components/editor/plugins/list-base-kit";
import { BaseMediaKit } from "@/components/editor/plugins/media-base-kit";

export const BlogStaticKit = [
  ...BaseBasicBlocksKit,
  ...BaseBasicMarksKit,
  ...BaseCodeBlockKit,
  ...BaseListKit,
  ...BaseLinkKit,
  ...BaseMediaKit,
  ...BaseIndentKit,
  ...BaseAlignKit,
];
