import { RangeSlider } from "@/components/ui/range-slider";
import KycHeader from "./KYC-header";

interface AgeStepProps {
  setHeight: (value: number) => void;
}

export default function HeightStep({ setHeight }: AgeStepProps) {
  return (
    <div>
      {/* Hero Text */}
      <KycHeader
        title="what is your height ?"
        subtitle="this helps us create Your personalized plan "
      />

      {/* Age */}
      <RangeSlider
        min={50}
        max={250}
        defaultValue={160}
        label="CM"
        onChange={(value) => setHeight(value)}
      />
    </div>
  );
}
