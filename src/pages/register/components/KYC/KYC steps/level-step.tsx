import { RadioGroup, RadioPill } from "@/components/ui/radio-group";
import KycHeader from "./KYC-header";

interface ActivityLevelStepProps {
  setLevel: (value: string) => void;
}
export default function ActivityLevelStep({
  setLevel,
}: ActivityLevelStepProps) {
  return (
    <div className="mt-4 text-white w-3/5">
      <KycHeader
        title="your regular physical activity level ?"
        subtitle="this helps us create Your personalized plan "
      />

      <RadioGroup
        className="mt-8 mb-6 gap-3"
        onValueChange={(value: string) => setLevel(value)}
      >
        <RadioPill value="level1" id="level1">
          Rookie
        </RadioPill>
        <RadioPill value="level2" id="level2">
          Beginner
        </RadioPill>
        <RadioPill value="level3" id="level3">
          Intermediate
        </RadioPill>
        <RadioPill value="level4" id="level4">
          Advance
        </RadioPill>
        <RadioPill value="level5" id="level5">
          True Beast
        </RadioPill>
      </RadioGroup>
    </div>
  );
}
