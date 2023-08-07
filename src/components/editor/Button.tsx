import clsx from "clsx";
import { PropsWithChildren } from "react";

export function EditorButton({
  children,
  className,
  active = false,
}: PropsWithChildren<{
  className?: string;
  active?: boolean;
}>) {
  return (
    <button
      className={clsx(
        "rounded-[6px] flex items-center justify-center editor-button outline-none active:scale-[0.98] transition-all duration-150 ease-out",
        !active && "bg-white hover:bg-[#F6F7F9]",
        active && "bg-[#000] editor-button--active",
        className
      )}
    >
      {children}
    </button>
  );
}
