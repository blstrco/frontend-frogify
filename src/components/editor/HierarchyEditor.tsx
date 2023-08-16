import clsx from "clsx";
import { EditorSectionTitle } from "./SectionTitle";

type HierarchyItem = {
  title: string;
  active: boolean;
};

export function HierarchyEditor({ items }: { items: HierarchyItem[] }) {
  return (
    <div className="px-[44px] pt-[44px]">
      <EditorSectionTitle title="Hierarchy" />

      {/* Hierarchy Elements List */}
      <div className="flex flex-col -mx-[44px]">
        {items.map((item) => (
          <button
            key={item.title}
            className={clsx(
              " px-[44px] h-[64px] line-clamp-1 flex items-center border-b-[1px] last:border-b-0",
              item.active && "bg-black hover:bg-black/90 text-white",
              !item.active && "bg-white hover:bg-[#F6F7F9] text-black"
            )}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
