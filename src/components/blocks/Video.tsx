export function Video() {
  return (
    <div className={"px-[32px] md:px-[80px] py-[80px] flex flex-col"}>
      <div className="flex">
        <div className="text-4xl font-semibold">
          Be bold. Don’t be semi-bold
        </div>

        <div className="flex-1" />

        <div className="text-white/80 max-w-[300px] hidden min-[1500px]:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et aliqua.
        </div>
      </div>

      {/* Video Placeholder */}
      <div className="mt-[40px] bg-gradient-to-br from-[#1C1C20] to-[#1C1C1F] w-full aspect-video"></div>
    </div>
  );
}
