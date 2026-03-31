import { RangeSlider } from "@/components/ui/range-slider";
import KycHeader from "./KYC-header";

interface AgeStepProps {
  setAge: (value: number) => void;
}

export default function AgeStep({ setAge }: AgeStepProps) {
  return (
    <div>
      {/* Hero Text */}
      <KycHeader
        title="How Old Are you ?"
        subtitle="this helps us create Your personalized plan"
      />

      {/* Age */}
      <RangeSlider
        min={15}
        max={90}
        defaultValue={25}
        label="years old"
        onChange={(value) => setAge(value)}
      />
    </div>
  );
}
