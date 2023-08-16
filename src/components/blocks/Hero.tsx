type HeroProps = {
  title: string;
  description: string;
  image: string;
};

export function Hero({ title, description, image }: HeroProps) {
  return (
    <div className={"flex py-[100px] xl:py-0"}>
      <div className="flex flex-col px-[32px] md:pl-[80px] md:pr-0 items-start justify-center">
        {/* Chip */}
        <div className="px-[14px] py-[6px] text-xs font-medium text-white rounded-full bg-primary">
          How we’re shaping the future
        </div>

        {/* Hero Text */}
        <div className="text-5xl font-semibold mt-[40px] max-w-[600px] leading-[1.2]">
          {title}
        </div>

        {/* Hero Description */}
        <div className="text-white/80 mt-[40px] max-w-[380px] leading-[1.2]">
          {description}
        </div>

        <a href="/" className="text-[#FFBE76] text-sm underline mt-[40px]">
          Learn more {">"}
        </a>
      </div>

      {/* Illustrations */}
      <div className="hidden xl:flex flex-1">
        <div className="flex-1" />
        <img src={image} alt="" className="max-w-[500px]" />
      </div>
    </div>
  );
}
