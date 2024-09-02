import { Ethereum } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { NFTCardProps } from "@/types";
import * as React from "react";

export const NFTCard = React.forwardRef<HTMLDivElement, NFTCardProps>(
  ({ className, image, title, price, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex w-full group flex-col rounded-[20px] p-3 space-y-4 border border-neutral-100 max-w-[282px] max-sm:space-y-2",
        className
      )}
      {...props}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[213px] object-cover rounded-[20px]"
      />
      <div className="flex justify-between items-center">
        <h3 className="text-base font-bold">{title}</h3>
        <span className="flex items-center gap-[2px] text-lg font-bold">
          <Ethereum />
          <span className="text-sm text-neutral-500">{price}</span>
        </span>
      </div>
      <button className="text-base font-semibold bg-transparent border border-neutral-800 rounded-xl px-[26px] py-[10px] w-full group-hover:bg-neutral-800 group-hover:text-neutral-50 transition-colors">
        Place a Bid
      </button>
    </div>
  )
);
NFTCard.displayName = "NFTCard";
