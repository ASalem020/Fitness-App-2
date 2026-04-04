import { RadioGroup, RadioPill } from "@/components/ui/radio-group";
import KycHeader from "./KYC-header";
import { useTranslations } from "use-intl";

interface GoalStepProps {
  setGoal: (value: string) => void;
}
export default function GoalStep({ setGoal }: GoalStepProps) {
  // Translations
  const t = useTranslations("kyc.goalStep");

  return (
    <div className="mt-4 text-white">
      <KycHeader title={t("title")} subtitle={t("description")} />

      <RadioGroup
        className="mt-8 mb-6 gap-3"
        onValueChange={(value: string) => setGoal(value)}
      >
        <RadioPill value="gain weight" id="gain-w">
          {t("gainWeight")}
        </RadioPill>
        <RadioPill value="lose weight" id="lose-w">
          {t("loseWeight")}
        </RadioPill>
        <RadioPill value="get fitter" id="get-f">
          {t("getFitter")}
        </RadioPill>
        <RadioPill value="flexible" id="flex">
          {t("gainMoreFlexible")}
        </RadioPill>
        <RadioPill value="learn" id="learn-b">
          {t("learnTheBasic")}
        </RadioPill>
      </RadioGroup>
    </div>
  );
}
