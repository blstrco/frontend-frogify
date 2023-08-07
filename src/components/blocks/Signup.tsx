export function Signup() {
  return (
    <div
      className={
        "px-[32px] md:px-[80px] py-[80px] flex flex-col border-y-[1px] border-white/60"
      }
    >
      <div className="flex">
        <div className="text-4xl font-semibold">Sign up today.</div>

        <div className="flex-1" />
      </div>

      {/* Video Placeholder */}
      <div className="mt-[40px]">
        <form
          action="/"
          className="flex flex-col xl:flex-row xl:items-center space-y-[16px] xl:space-y-0 xl:space-x-[16px]"
        >
          <input className="h-[50px] w-full xl:w-[min(100%,500px)] bg-white text-black px-[20px] rounded-[4px]" />
          <button className="h-[50px] bg-primary text-white font-semibold text-xl flex items-center justify-center px-[32px] rounded-[4px]">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
