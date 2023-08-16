import clsx from "clsx";
import { MouseEvent, PropsWithChildren } from "react";

export function Button({
  children,
  className,
  active = false,
  onClick,
}: PropsWithChildren<{
  className?: string;
  active?: boolean;
  onClick?: (e: MouseEvent) => void;
}>) {
  return (
    <button
      className={clsx(
        "rounded-[6px] flex items-center justify-center editor-button outline-none active:scale-[0.98] transition-all duration-150 ease-out",
        !active && "bg-white hover:bg-[#F6F7F9]",
        active && "bg-[#000] editor-button--active",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
