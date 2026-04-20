import { RangeSlider } from "@/components/ui/range-slider";
import KycHeader from "./KYC-header";
import { useTranslations } from "use-intl";

interface AgeStepProps {
  setWeight: (value: number) => void;
}

export default function WeightStep({ setWeight }: AgeStepProps) {
  // Translations
  const t = useTranslations("kyc.weightStep");

  return (
    <div>
      {/* Hero Text */}
      <KycHeader title={t("title")} subtitle={t("description")} />

      {/* Age */}
      <RangeSlider
        min={30}
        max={200}
        defaultValue={90}
        label={t("label")}
        onChange={(value) => setWeight(value)}
      />
    </div>
  );
}
