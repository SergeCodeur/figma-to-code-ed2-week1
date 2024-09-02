import CollectionBtnFilter from "../CollectionsBtnFilter";
import NFTCollectionContainer from "../NftCollectionsContainer";

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
        <NFTCollectionContainer />
      </div>
    </section>
  );
};

export default Collections;
