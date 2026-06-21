"use client";

import {
  BoldIcon,
  Code2Icon,
  HighlighterIcon,
  ItalicIcon,
  StrikethroughIcon,
  SubscriptIcon,
  SuperscriptIcon,
  UnderlineIcon,
} from "lucide-react";
import { KEYS } from "platejs";

import { AlignToolbarButton } from "@/components/ui/align-toolbar-button";
import { CodeBlockToolbarButton } from "@/components/ui/code-block-toolbar-button";
import { FixedToolbar } from "@/components/ui/fixed-toolbar";
import {
  IndentToolbarButton,
  OutdentToolbarButton,
} from "@/components/ui/indent-toolbar-button";
import { LinkToolbarButton } from "@/components/ui/link-toolbar-button";
import {
  BulletedListToolbarButton,
  NumberedListToolbarButton,
  TodoListToolbarButton,
} from "@/components/ui/list-toolbar-button";
import { MarkToolbarButton } from "@/components/ui/mark-toolbar-button";
import { MediaToolbarButton } from "@/components/ui/media-toolbar-button";
import { TurnIntoToolbarButton } from "@/components/ui/turn-into-toolbar-button";
import { ToolbarGroup, ToolbarSeparator } from "@/components/ui/toolbar";

export function BlogEditorToolbar() {
  return (
    <FixedToolbar className="rounded-none border-x-0 border-t-0">
      <ToolbarGroup>
        <TurnIntoToolbarButton />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <MarkToolbarButton nodeType={KEYS.bold} tooltip="پررنگ">
          <BoldIcon />
        </MarkToolbarButton>
        <MarkToolbarButton nodeType={KEYS.italic} tooltip="مورب">
          <ItalicIcon />
        </MarkToolbarButton>
        <MarkToolbarButton nodeType={KEYS.underline} tooltip="زیرخط">
          <UnderlineIcon />
        </MarkToolbarButton>
        <MarkToolbarButton nodeType={KEYS.strikethrough} tooltip="خط‌خورده">
          <StrikethroughIcon />
        </MarkToolbarButton>
        <MarkToolbarButton nodeType={KEYS.code} tooltip="کد درون‌خطی">
          <Code2Icon />
        </MarkToolbarButton>
        <MarkToolbarButton nodeType={KEYS.highlight} tooltip="هایلایت">
          <HighlighterIcon />
        </MarkToolbarButton>
        <MarkToolbarButton nodeType={KEYS.sup} tooltip="بالانویس">
          <SuperscriptIcon />
        </MarkToolbarButton>
        <MarkToolbarButton nodeType={KEYS.sub} tooltip="زیرنویس">
          <SubscriptIcon />
        </MarkToolbarButton>
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <BulletedListToolbarButton />
        <NumberedListToolbarButton />
        <TodoListToolbarButton />
        <OutdentToolbarButton />
        <IndentToolbarButton />
        <AlignToolbarButton />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <LinkToolbarButton tooltip="لینک" />
        <CodeBlockToolbarButton />
        <MediaToolbarButton nodeType={KEYS.img} />
        <MediaToolbarButton nodeType={KEYS.video} />
        <MediaToolbarButton nodeType={KEYS.audio} />
        <MediaToolbarButton nodeType={KEYS.file} />
      </ToolbarGroup>
    </FixedToolbar>
  );
}
