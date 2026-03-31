import { RangeSlider } from "@/components/ui/range-slider";
import KycHeader from "./KYC-header";

interface AgeStepProps {
  setWeight: (value: number) => void;
}

export default function WeightStep({ setWeight }: AgeStepProps) {
  return (
    <div>
      {/* Hero Text */}
      <KycHeader
        title="what is your weight ?"
        subtitle="this helps us create Your personalized plan "
      />

      {/* Age */}
      <RangeSlider
        min={30}
        max={150}
        defaultValue={90}
        label="Kg"
        onChange={(value) => setWeight(value)}
      />
    </div>
  );
}
