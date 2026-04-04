import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

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
  // States
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);

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
      <>{remainingSeconds > 0 && ` at ${remainingSeconds}`}</>
    </Button>
  );
}
