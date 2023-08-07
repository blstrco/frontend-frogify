import { PageView } from "../components/PageView";
import { EditorContent } from "../components/editor/Content";
import { EditorModeToggles } from "../components/editor/ModeToggles";

export function BaseLayout() {
  return (
    <div className="min-h-screen flex bg-[#e7edf1]">
      {/* Left Side */}
      <div className="flex-1 bg-[#EFF3F6]">
        <PageView />
      </div>

      {/* Right Side (Editor) */}
      <div className="w-[374px]">
        <div className="h-screen w-full overflow-auto top-0 sticky">
          <EditorContent />
          <EditorModeToggles />
        </div>
      </div>
    </div>
  );
}
