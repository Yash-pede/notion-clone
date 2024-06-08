import { cn } from "@/cn";
import React from "react";

type Props = {
  content?: React.ReactNode | string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
};

const BorderMagicButton = (props: Props) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-[0.5px] focus:ring-offset-washed-purple-500/40",
        props.className
      )}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {props.content}
      </span>
    </button>
  );
};

export default BorderMagicButton;
