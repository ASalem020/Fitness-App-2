import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";

type RemainingSecondsProps = {
  seconds: number;
  handleClick: () => void;
  text: string;
};

export default function RemainingSeconds({
  seconds,
  handleClick,
  text,
}: RemainingSecondsProps) {
  // Translations
  const t = useTranslations("forget-pass.otp-step");

  // States
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);

  // Keep local countdown in sync when parent passes a new duration (e.g. after resend).
  useEffect(() => {
    setRemainingSeconds(seconds);
  }, [seconds]);

  // Effects
  useEffect(() => {
    if (remainingSeconds <= 0) return;

    const timeoutId = setTimeout(() => {
      setRemainingSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [remainingSeconds]);

  return (
    <Button
      variant={"link"}
      className="underline py-1 text-base h-auto hover:text-orange-700 disabled:text-gray-400 disabled:no-underline"
      disabled={remainingSeconds > 0}
      onClick={handleClick}
      type="button"
    >
      {text}
      <>{remainingSeconds > 0 && ` ${t("at")} ${remainingSeconds}`}</>
    </Button>
  );
}
