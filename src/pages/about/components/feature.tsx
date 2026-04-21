import type { FeatureType } from "../about";

// type
type Props = {
  feature: FeatureType;
};

export default function Feature({ feature }: Props) {
  return (
    <>
      <div className="mb-8 lg:mb-16">
        <h4 className="font-semibold flex items-center gap-4">
          <img src={feature.img} alt="arrow up icon" /> {feature.title}
        </h4>
        <p className="text-sm mt-4 w-60">{feature.text}</p>
      </div>
    </>
  );
}
