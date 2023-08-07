import { CardsIcon } from "../icons/Cards";
import { ContactIcon } from "../icons/Contact";
import { DesktopIcon } from "../icons/Desktop";
import { HeroIcon } from "../icons/Hero";
import { MobileIcon } from "../icons/Mobile";
import { VideoIcon } from "../icons/Video";
import { EditorButton } from "./Button";
import { EditorSectionTitle } from "./SectionTitle";

export function EditorContent() {
  return (
    <>
      {/* Device Toggles */}
      <div className="px-[44px] pt-[44px]">
        <EditorSectionTitle title="Preview" />
        <div className="flex h-[44px] space-x-[10px]">
          <EditorButton className="flex-1">
            <MobileIcon />
          </EditorButton>
          <EditorButton className="flex-1" active>
            <DesktopIcon />
          </EditorButton>
        </div>
      </div>

      {/* Block Buttons */}
      <div className="mt-[44px] px-[44px]">
        <EditorSectionTitle title="Preview" />
        <div className="flex h-[64px] space-x-[10px]">
          <EditorButton className="flex-1">
            <HeroIcon />
          </EditorButton>
          <EditorButton className="flex-1">
            <CardsIcon />
          </EditorButton>
          <EditorButton className="flex-1">
            <VideoIcon />
          </EditorButton>
          <EditorButton className="flex-1">
            <ContactIcon />
          </EditorButton>
        </div>
      </div>
    </>
  );
}
