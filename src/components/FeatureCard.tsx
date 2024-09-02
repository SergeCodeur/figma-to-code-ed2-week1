import { cn } from "@/lib/utils";
import { FeatureCardProps } from "@/types";
import React from "react";

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
FeatureCard.displayName = "FeatureCard";
