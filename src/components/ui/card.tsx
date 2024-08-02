import { Ethereum } from "@/assets/icons";
import { cn } from "@/lib/utils";
import * as React from "react";

export interface NFTCardProps {
  className?: string;
  image: string;
  title: string;
  price: number | string;
}

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
        alt=""
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

export interface FeatureCardProps {
  className?: string;
  icon: React.ReactElement;
  title: string;
  description: number | string;
}

export const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, icon, title, description, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex w-full hover:bg-neutral-800/10 flex-col rounded-3xl p-6 gap-2.5 bg-neutral-50 max-w-[282px]",
        className
      )}
      {...props}
    >
      <span className="h-[50px] w-[50px] rounded-lg flex justify-center items-center bg-neutral-800">
        {icon}
      </span>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-neutral-500">{description}</p>
    </div>
  )
);
NFTCard.displayName = "NFTCard";
