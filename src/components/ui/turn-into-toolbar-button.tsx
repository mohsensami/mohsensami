"use client";

import * as React from "react";

import type { DropdownMenuProps } from "@radix-ui/react-dropdown-menu";

import { PilcrowIcon, QuoteIcon, MinusIcon } from "lucide-react";
import { KEYS } from "platejs";
import { useEditorRef, useEditorSelector } from "platejs/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ToolbarButton } from "./toolbar";

const items = [
  { icon: PilcrowIcon, label: "پاراگراف", value: KEYS.p },
  { icon: PilcrowIcon, label: "عنوان ۱", value: KEYS.h1 },
  { icon: PilcrowIcon, label: "عنوان ۲", value: KEYS.h2 },
  { icon: PilcrowIcon, label: "عنوان ۳", value: KEYS.h3 },
  { icon: QuoteIcon, label: "نقل‌قول", value: KEYS.blockquote },
  { icon: MinusIcon, label: "خط جداکننده", value: KEYS.hr },
] as const;

export function TurnIntoToolbarButton(props: DropdownMenuProps) {
  const editor = useEditorRef();
  const [open, setOpen] = React.useState(false);

  const blockType = useEditorSelector((ed) => {
    const entry = ed.api.block();
    if (!entry) return KEYS.p;
    return (entry[0].type as string) ?? KEYS.p;
  }, []);

  const label = items.find((item) => item.value === blockType)?.label ?? "بلوک";

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton pressed={open} tooltip="نوع بلوک" isDropdown className="min-w-[7rem]">
          {label}
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        {items.map(({ icon: Icon, label: itemLabel, value }) => (
          <DropdownMenuItem
            key={value}
            onSelect={() => {
              if (value === KEYS.hr) {
                editor.tf.insertNodes({ type: KEYS.hr, children: [{ text: "" }] });
                editor.tf.insertNodes({ type: KEYS.p, children: [{ text: "" }] });
              } else {
                editor.tf.setNodes({ type: value }, { match: (n) => editor.api.isBlock(n) });
              }
              editor.tf.focus();
            }}
          >
            <Icon className="ml-2 size-4" />
            {itemLabel}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
