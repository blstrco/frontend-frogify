import { useState } from "react";
import { CardsIcon } from "../icons/Cards";
import { ContactIcon } from "../icons/Contact";
import { DesktopIcon } from "../icons/Desktop";
import { HeroIcon } from "../icons/Hero";
import { MobileIcon } from "../icons/Mobile";
import { VideoIcon } from "../icons/Video";
import { Button } from "../primitives/Button";
import { EditorSectionTitle } from "./SectionTitle";
import { BlockCustomizationEditor } from "./BlockCustomizationEditor";
import { HierarchyEditor } from "./HierarchyEditor";
import { EditorModeToggles } from "./ModeToggles";

export type EditorTab = "editor" | "hierarchy";

export function Editor() {
  const [tab, setTab] = useState<EditorTab>("editor");

  return (
    <div className="h-screen w-full overflow-auto top-0 sticky">
      {/* Device Preview Buttons */}
      <div className="px-[44px] pt-[44px]">
        <EditorSectionTitle title="Preview" />
        <div className="flex h-[44px] space-x-[10px]">
          <Button className="flex-1">
            <MobileIcon />
          </Button>
          <Button className="flex-1" active>
            <DesktopIcon />
          </Button>
        </div>
      </div>

      {/* Block Add Buttons */}
      <div className="mt-[44px] px-[44px]">
        <EditorSectionTitle title="Add Block" />
        <div className="flex h-[64px] space-x-[10px]">
          <Button className="flex-1">
            <HeroIcon />
          </Button>
          <Button className="flex-1">
            <CardsIcon />
          </Button>
          <Button className="flex-1">
            <VideoIcon />
          </Button>
          <Button className="flex-1">
            <ContactIcon />
          </Button>
        </div>
      </div>

      <hr className="border-black/10 mt-[44px]" />

      {/* Block Editor Tab/Hierarchy Tab */}
      {tab === "editor" && <BlockCustomizationEditor />}
      {tab === "hierarchy" && (
        <HierarchyEditor
          items={[
            { title: "Item 1", active: true },
            { title: "Item 2", active: false },
          ]}
        />
      )}

      <EditorModeToggles tab={tab} onChange={setTab} />
    </div>
  );
}
