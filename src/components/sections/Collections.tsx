import cyberpunk from "@/assets/images/cyber-punk.png";
import durolost_boll from "@/assets/images/durolost-boll-upper.png";
import snoop_dog from "@/assets/images/snoop-dog.png";
import space_x_wiper from "@/assets/images/space-x-wiper.png";
import { ReactNode } from "react";
import { NFTCard, NFTCardProps } from "../ui/card";

type collectionProps = {
  label: ReactNode;
  active?: boolean;
};

// Collection Filter
const CollectionFilter: collectionProps[] = [
  {
    label: "All categories",
    active: true,
  },
  {
    label: "Art",
    active: false,
  },
  {
    label: "Celebrities",
    active: false,
  },
  {
    label: "Gaming",
    active: false,
  },
  {
    label: "Sport",
    active: false,
  },
];

// Collection Buttons Filter
const CollectionBtnFilter = () => {
  return (
    <div className="space-x-4 overflow-x-auto whitespace-nowrap">
      {CollectionFilter.map((item, index) => (
        <button
          key={index}
          className={`${
            item.active === true
              ? "bg-neutral-800 text-white hover:bg-neutral-800/90"
              : "text-neutral-800 bg-neutral-50 hover:bg-neutral-800/10"
          } px-[26px] py-2.5 rounded-xl text-sm font-semibold`}
        >
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

// NFT Card Content
const NFTCardData: NFTCardProps[] = [
  {
    image: cyberpunk,
    title: "Cyber Punk",
    price: 68,
  },
  {
    image: durolost_boll,
    title: "Durolost  Boll - Upper",
    price: 68,
  },
  {
    image: space_x_wiper,
    title: "Space X Wiper",
    price: 68,
  },
  {
    image: snoop_dog,
    title: "Snoop Dog",
    price: 68,
  },
];

// Nft Collection Card
const NFTCollectionCard = () => {
  return (
    <>
      {NFTCardData.map((item, index) => (
        <NFTCard key={index} {...item} />
      ))}
    </>
  );
};

const Collections = () => {
  return (
    <section className="w-full space-y-9 pb-[100px] pt-16">
      <h2 className="text-3xl font-bold">Collections</h2>
      <div className="flex justify-between flex-wrap gap-2.5">
        <CollectionBtnFilter />
        <a href="#" className="underline text-sm font-semibold">
          View more
        </a>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        <NFTCollectionCard />
      </div>
    </section>
  );
};

export default Collections;
