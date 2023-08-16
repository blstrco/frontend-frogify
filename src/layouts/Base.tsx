import { PageView } from "../components/PageView";
import { Editor } from "../components/editor/Editor";

export function BaseLayout() {
  return (
    <div className="min-h-screen flex bg-[#e7edf1]">
      {/* Left Side */}
      <div className="flex-1 bg-[#EFF3F6]">
        <PageView />
      </div>

      {/* Right Side (Editor) */}
      <div className="w-[374px]">
        <Editor />
      </div>
    </div>
  );
}
