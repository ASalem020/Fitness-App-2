import { RangeSlider } from "@/components/ui/range-slider";
import KycHeader from "./KYC-header";
import { useTranslations } from "use-intl";

interface AgeStepProps {
  setAge: (value: number) => void;
}

export default function AgeStep({ setAge }: AgeStepProps) {
  // Translations
  const t = useTranslations("kyc.ageStep");

  return (
    <div>
      {/* Hero Text */}
      <KycHeader title={t("title")} subtitle={t("description")} />

      {/* Age */}
      <RangeSlider
        min={15}
        max={90}
        defaultValue={25}
        label={t("label")}
        onChange={(value) => setAge(value)}
      />
    </div>
  );
}
