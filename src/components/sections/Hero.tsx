import moveRight from "../../assets/icons/move-right.svg";
import gorilla from "../../assets/images/gorilla.png";
import humanFace from "../../assets/images/human-face.png";
import star from "../../assets/images/star.png";

const Hero = () => {
  return (
    <section className="container py-[106px] flex min-h-[607px] relative">
      <div className="w-[787px] space-y-[52px]">
        <h1 className="text-[120px] text-neutral-600 leading-[108px]">
          See the NFT new world
        </h1>
        <span className="block space-y-[26px]">
          <p className="max-w-[412px] w-full text-base font-semibold text-neutral-400">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, di
          </p>
          <button className="flex items-center space-x-4 text-neutral-600">
            <span>Discover Now</span>
            <img src={moveRight} alt="" />
          </button>
        </span>
      </div>
      <div className="absolute top-0 right-0 max-w-[596px] w-full h-full translate-y-[126px] lg:-translate-x-[30px]">
        <img
          src={humanFace}
          alt=""
          className="w-[287.58px] h-[442.29px] object-cover rounded-[164px] absolute bottom-0 left-0"
        />
        <img src={star} alt="" className="absolute top-[7%] left-[23%]" />
        <img
          src={gorilla}
          alt=""
          className="w-[287.58px] h-[442.29px] object-cover rounded-[164px] absolute top-0 right-0"
        />
      </div>
    </section>
  );
};

export default Hero;
