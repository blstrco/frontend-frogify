import { useState } from "react";
import { PageView } from "../components/PageView";
import { GlobalEditorContent } from "../components/editor/GlobalEditorContent";
import { EditorModeToggles } from "../components/editor/ModeToggles";
import { HierarchyTab } from "../components/editor/HierarchyTab";
import { EditorTab } from "../components/editor/EditorTab";

export type EditorTab = "editor" | "hierarchy";

export function BaseLayout() {
  const [tab, setTab] = useState<EditorTab>("editor");

  return (
    <div className="min-h-screen flex bg-[#e7edf1]">
      {/* Left Side */}
      <div className="flex-1 bg-[#EFF3F6]">
        <PageView />
      </div>

      {/* Right Side (Editor) */}
      <div className="w-[374px]">
        <div className="h-screen w-full overflow-auto top-0 sticky">
          <GlobalEditorContent />
          <hr className="border-black/10 mt-[44px]" />

          {tab === "editor" && <EditorTab />}
          {tab === "hierarchy" && (
            <HierarchyTab items={[{ title: "Item 1" }, { title: "Item 2" }]} />
          )}

          <EditorModeToggles tab={tab} onChange={setTab} />
        </div>
      </div>
    </div>
  );
}
