import type { Advantage } from "../types/advantage";

export const advantages: Advantage[] = [
  {
    translationKey: "plans",
    id: crypto.randomUUID(),
    title: "personalized fitness plans",
    subTitle:
      "We tailor every workout to fit your unique goals and fitness level ensuring that you make the most progress.",
  },
  {
    translationKey: "focus",
    id: crypto.randomUUID(),
    title: "results-driven focus",
    subTitle:
      "Everything we do is designed to help you achieve measurable results, whether you're aiming for weight loss.",
  },
  {
    translationKey: "equipment",
    id: crypto.randomUUID(),
    title: "state-of-the-art equipment",
    subTitle:
      "We provide the latest in gym equipment, from cardio machines to free weights, designed to support every type.",
  },
];
