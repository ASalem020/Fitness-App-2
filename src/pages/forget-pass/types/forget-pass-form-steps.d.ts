import type { FORGET_PASS_STEPS } from "../constants/forget-pass.constant";

export type ForgetPassFormStepsType =
  (typeof FORGET_PASS_STEPS)[keyof typeof FORGET_PASS_STEPS];
