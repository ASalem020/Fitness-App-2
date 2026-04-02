import z from "zod";
import type {
  emailStepSchema,
  forgetPassSchema,
  newPasswordSchema,
  otpStepSchema,
} from "../schema/forget-pass.schema";

export type ForgetPassFormInputs = z.infer<typeof forgetPassSchema>;

export type EmailStepFormType = z.infer<typeof emailStepSchema>;

export type OTPStepFormType = z.infer<typeof otpStepSchema>;

export type NewPasswordFormType = z.infer<typeof newPasswordSchema>;
