const ActionButtons = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <span
      className={`${
        isOpen ? "!translate-x-[0%] max-lg:pointer-events-auto" : ""
      } inline-flex gap-5 items-center max-lg:absolute z-[4] max-lg:translate-y-[360px] max-lg:translate-x-[150%] max-lg:right-[22%] max-sm:right-[6%] transition-transform duration-300 ease-linear max-lg:pointer-events-none`}
    >
      <button className="border-r px-[26px] max-sm:px-5 text-base max-sm:text-sm h-8 font-semibold text-neutral-800 border-neutral-800">
        SignUp
      </button>
      <button className="bg-neutral-800 text-white font-semibold px-[26px] max-sm:px-5 py-2.5 rounded-[42px] text-base max-sm:text-sm">
        Connect Wallet
      </button>
    </span>
  );
};

export default ActionButtons;
