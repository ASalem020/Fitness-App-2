import { RadioGroup, RadioPill } from "@/components/ui/radio-group";
import KycHeader from "./KYC-header";

interface GoalStepProps {
  setGoal: (value: string) => void;
}
export default function GoalStep({ setGoal }: GoalStepProps) {
  return (
    <div className="mt-4 text-white">
      <KycHeader
        title="what is your Goal ?"
        subtitle="this helps us create Your personalized plan "
      />

      <RadioGroup
        className="mt-8 mb-6 gap-3"
        onValueChange={(value: string) => setGoal(value)}
      >
        <RadioPill value="gain weight" id="gain-w">
          Gain Weight
        </RadioPill>
        <RadioPill value="lose weight" id="lose-w">
          Lose Weight
        </RadioPill>
        <RadioPill value="get fitter" id="get-f">
          Get Fitter
        </RadioPill>
        <RadioPill value="flexible" id="flex">
          Gain More Flexible
        </RadioPill>
        <RadioPill value="learn" id="learn-b">
          Learn The Basic
        </RadioPill>
      </RadioGroup>
    </div>
  );
}
