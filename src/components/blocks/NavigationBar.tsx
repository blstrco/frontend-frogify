export function NavigationBar() {
  return (
    <div
      className={
        "flex items-center font-medium w-full space-x-[50px] px-[32px] md:px-[80px]"
      }
    >
      <div className="font-semibold text-2xl">Frogify</div>

      {/* Nav Items */}
      <div className="xl:flex items-center space-x-[24px] hidden">
        <div>What is Frogify</div>
        <div>Platform</div>
        <div>Marketplace</div>
        <div>Payments</div>
      </div>

      <div className="flex-1" />

      {/* Right Side */}
      <div>Login</div>
    </div>
  );
}
