import clsx from "clsx";

function Card({
  title,
  description,
  image,
  className,
}: {
  title: string;
  description: string;
  image: string;
  className?: string;
}) {
  return (
    <div className={clsx("py-[50px] flex flex-col items-center", className)}>
      <div className="flex flex-col">
        <div className="font-semibold text-2xl">{title}</div>
        <div className="mt-[40px] text-white/80">{description}</div>
        <img src={image} alt="" className="mt-[50px]" />
      </div>
    </div>
  );
}

export function Cards() {
  return (
    <div
      className={
        "grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 border-y-[1px] border-white/60"
      }
    >
      <Card
        title="Big brains with big code"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        image="/illustration-2.png"
        className="px-[32px] md:pl-[80px] md:pr-[44px]"
      />

      <Card
        title="No bugs, all features"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        image="/illustration-3.png"
        className="px-[32px] md:px-[44px] border-y-[1px] lg:border-y-0 lg:border-x-[1px] border-white/60"
      />

      <Card
        title="All the AIs"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        image="/illustration-4.png"
        className="px-[32px] md:pr-[80px] md:pl-[44px]"
      />
    </div>
  );
}
