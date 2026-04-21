import { RangeSlider } from "@/components/ui/range-slider";
import KycHeader from "./kyc-header";
import { useTranslations } from "use-intl";

interface AgeStepProps {
  setHeight: (value: number) => void;
}

export default function HeightStep({ setHeight }: AgeStepProps) {
  // Translations
  const t = useTranslations("kyc.heightStep");

  return (
    <div>
      {/* Hero Text */}
      <KycHeader title={t("title")} subtitle={t("description")} />

      {/* Age */}
      <RangeSlider
        min={50}
        max={250}
        defaultValue={160}
        label={t("label")}
        onChange={(value) => setHeight(value)}
      />
    </div>
  );
}
