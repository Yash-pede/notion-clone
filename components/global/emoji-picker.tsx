"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
  getValue: (emoji: string) => void;
};

const EmojiPicker = (props: Props) => {
  const route = useRouter();
  const Picker = dynamic(() => import("emoji-picker-react"));
  const onClick = (selectedEmoji: any) => {
    if (props.getValue) props.getValue(selectedEmoji.emoji);
  };

  return (
    <Popover >
      <PopoverTrigger className="cursor-pointer">{props.children}</PopoverTrigger>
      <PopoverContent className="p-0 border-none z-[99999]">
        <Picker onEmojiClick={onClick} />
      </PopoverContent>
    </Popover>
  );
};

export default EmojiPicker;
