import { MoveRight } from "@/assets/icons";
import gorilla from "@/assets/images/gorilla.png";
import humanFace from "@/assets/images/human-face.png";
import star from "@/assets/images/star.png";

const Hero = () => {
  return (
    <section className="lg:py-[106px] py-8 lg:mb-[126px] flex min-h-[607px] relative max-lg:flex-col h-full max-lg:overflow-x-hidden">
      <div className="w-[787px] space-y-[52px] max-lg:space-y-[34px] max-sm:space-y-[18px] max-lg:w-[676px] max-md:w-[335px]">
        <h1 className="text-[120px] text-neutral-600 leading-[108px] max-lg:text-[96px] max-lg:leading-[82px] max-md:text-[52px] max-sm:text-[46px]">
          See the NFT new world
        </h1>
        <span className="block space-y-[26px]">
          <p className="max-w-[412px] w-full text-base max-sm:text-sm font-semibold text-neutral-400">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, di
          </p>
          <button className="flex items-center space-x-4 text-neutral-600 group">
            <span>Discover Now</span>
            <MoveRight className="group-hover:scale-110 transition-transform" />
          </button>
        </span>
      </div>
      <div className="flex gap-5 lg:absolute relative top-0 right-0 max-w-[596px] w-full h-full max-lg:h-[588px] lg:translate-y-[126px] max-md:translate-x-0">
        <div className="flex items-end">
          <img
            src={humanFace}
            alt=""
            className="min-w-[287.58px] h-[442.29px] object-cover rounded-[164px]"
          />
        </div>
        <div>
          <img
            src={gorilla}
            alt=""
            className="min-w-[287.58px] h-[442.29px] object-cover rounded-[164px]"
          />
        </div>
        <img
          src={star}
          alt=""
          className="absolute lg:top-[7%] top-[3%] left-[23%]"
        />
      </div>
    </section>
  );
};

export default Hero;
