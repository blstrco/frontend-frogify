function Chip() {
  return (
    <div className="px-[14px] py-[6px] text-xs font-medium text-white rounded-full bg-primary">
      How we’re shaping the future
    </div>
  );
}

function HeroText() {
  return (
    <div className="text-5xl font-semibold mt-[40px] max-w-[600px] leading-[1.2]">
      Identity management. Identity privacy
    </div>
  );
}

function HeroDescription() {
  return (
    <div className="text-white/80 mt-[40px] max-w-[380px] leading-[1.2]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  );
}

export function Hero() {
  return (
    <div className={"flex py-[100px] xl:py-0"}>
      <div className="flex flex-col px-[32px] md:pl-[80px] md:pr-0 items-start justify-center">
        <Chip />
        <HeroText />
        <HeroDescription />

        <a href="/" className="text-[#FFBE76] text-sm underline mt-[40px]">
          Learn more {">"}
        </a>
      </div>

      {/* Illustrations */}
      <div className="hidden xl:flex flex-1">
        <div className="flex-1" />
        <img src="/illustration-1.png" alt="" className="max-w-[500px]" />
      </div>
    </div>
  );
}
