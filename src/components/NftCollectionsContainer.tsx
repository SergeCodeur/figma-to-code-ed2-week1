import { NFTCardData } from "@/constants/nftCollectionsCard";
import { NFTCard } from "./NftCard";

const NFTCollectionContainer = () => {
  return (
    <>
      {NFTCardData.map((item, index) => (
        <NFTCard key={index} {...item} />
      ))}
    </>
  );
};

export default NFTCollectionContainer;
