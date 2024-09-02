import { featuresData } from "@/constants/feature";
import { FeatureCard } from "../FeatureCard";

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

export default Features;
