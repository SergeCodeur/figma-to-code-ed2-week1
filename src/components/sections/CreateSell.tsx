import { Bitcoin, CloudDownload, SaleTag, Wallet } from "@/assets/icons";
import { FeatureCard } from "../ui/card";

type featuresProps = {
  icon: React.ReactElement;
  title: string;
  description: string;
};

const featuresData: featuresProps[] = [
  {
    icon: <Wallet />,
    title: "Set up your wallet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    icon: <CloudDownload />,
    title: "Add your NFT's",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    icon: <SaleTag />,
    title: "Promote your NFT's",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    icon: <Bitcoin />,
    title: "Sell your NFT's",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
];

const Features = () => {
  return (
    <>
      {featuresData.map((item, index) => (
        <FeatureCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </>
  );
};

const CreateSell = () => {
  return (
    <section className="container space-y-9">
      <h2 className="text-3xl font-bold">Create & Sell Now</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        <Features />
      </div>
    </section>
  );
};

export default CreateSell;
