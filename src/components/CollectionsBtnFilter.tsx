import { CollectionFilter } from "@/constants/collections";

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
export default CollectionBtnFilter;
