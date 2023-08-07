import { PropsWithChildren } from "react";
import clsx from "clsx";
import { PencilIcon } from "../icons/Pencil";
import { TreeIcon } from "../icons/Tree";

function ModeButton({
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
        "flex items-center w-[70px] justify-center editor-button outline-none active:scale-[0.98] transition-all duration-150 ease-out",
        !active && "bg-white hover:bg-[#F6F7F9]",
        active && "bg-[#000] editor-button--active",
        className
      )}
    >
      {children}
    </button>
  );
}

export function EditorModeToggles() {
  return (
    <>
      {/* Device Toggles */}
      <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2">
        <div className="flex h-[50px] shadow-[0px_4px_27px_-10px_rgba(0,0,0,0.25)] rounded-full">
          <ModeButton className="flex-1 rounded-l-full" active>
            <PencilIcon />
          </ModeButton>
          <ModeButton className="flex-1 rounded-r-full">
            <TreeIcon />
          </ModeButton>
        </div>
      </div>
    </>
  );
}
