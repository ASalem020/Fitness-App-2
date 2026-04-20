import { RadioGroup, RadioPill } from "@/components/ui/radio-group";
import KycHeader from "./kyc-header";
import { useTranslations } from "use-intl";

interface ActivityLevelStepProps {
  setLevel: (value: string) => void;
}
export default function ActivityLevelStep({
  setLevel,
}: ActivityLevelStepProps) {
  // Translations
  const t = useTranslations("kyc.levelStep");

  return (
    <div className="mt-4 text-white w-3/5">
      <KycHeader title={t("title")} subtitle={t("description")} />

      <RadioGroup
        className="mt-8 mb-6 gap-3"
        onValueChange={(value: string) => setLevel(value)}
      >
        <RadioPill value="level1" id="level1">
          {t("level1")}
        </RadioPill>
        <RadioPill value="level2" id="level2">
          {t("level2")}
        </RadioPill>
        <RadioPill value="level3" id="level3">
          {t("level3")}
        </RadioPill>
        <RadioPill value="level4" id="level4">
          {t("level4")}
        </RadioPill>
        <RadioPill value="level5" id="level5">
          {t("level5")}
        </RadioPill>
      </RadioGroup>
    </div>
  );
}
