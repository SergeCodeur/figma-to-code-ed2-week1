import Cover from "@/assets/images/cover-fungible_token.png";

const CallToAction = () => {
  return (
    <div className="container py-[100px]">
      <div className="relative h-[336px] rounded-[32px] overflow-hidden">
        <img
          className="w-full h-full object-cover brightness-50"
          src={Cover}
          alt="image fungible token"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center gap-10 py-[72px]">
          <h2 className="text-[64px] max-md:text-[46px] max-sm:text-[28px] text-white leading-[40px]">
            Build your NFT profile
          </h2>
          <p className="text-white text-xl font-semibold max-sm:text-xs">
            Join almost 10k NFT profiles on Digit !
          </p>
          <button className="text-neutral-800 bg-white px-[26px] py-3 rounded-[42px] text-base font-semibold">
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
