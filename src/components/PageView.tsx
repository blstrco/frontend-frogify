import { Cards } from "./blocks/Cards";
import { Hero } from "./blocks/Hero";
import { NavigationBar } from "./blocks/NavigationBar";
import { Signup } from "./blocks/Signup";
import { Video } from "./blocks/Video";

export function PageView() {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#242428] to-[#313137] text-white flex-col py-[24px] md:py-[44px]">
      <NavigationBar />
      <Hero
        title="Identity management. Identity privacy"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        image="/illustration-1.png"
      />
      <Cards />
      <Video />
      <Signup />
    </div>
  );
}
