import { ReactNode } from "react";

export type FooterLinksProps = {
  label: string;
  href: string;
};

export type FeaturesProps = {
  icon: React.ReactElement;
  title: string;
  description: string;
};

export type CollectionProps = {
  label: ReactNode;
  active?: boolean;
};

export interface FeatureCardProps {
  className?: string;
  icon: React.ReactElement;
  title: string;
  description: number | string;
}

export interface NFTCardProps {
  className?: string;
  image: string;
  title: string;
  price: number | string;
}

export type NavLink = {
  label: string;
  href: string;
};
