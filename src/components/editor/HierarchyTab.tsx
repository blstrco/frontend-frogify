import { EditorSectionTitle } from "./SectionTitle";

type HierarchyItem = {
  title: string;
};

export function HierarchyTab({ items }: { items: HierarchyItem[] }) {
  return (
    <div className="px-[44px] pt-[44px]">
      <EditorSectionTitle title="Hierarchy" />

      <div className="flex flex-col -mx-[44px]">
        {items.map((item) => (
          <button
            key={item.title}
            className="bg-white hover:bg-[#F6F7F9] px-[44px] h-[64px] line-clamp-1 flex items-center border-b-[1px] last:border-b-0"
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
