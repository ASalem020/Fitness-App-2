import type { useTranslations } from "use-intl";
import z from "zod";

export const forgetPassSchema = z.object({
  email: z.email({ error: "Please enter a valid email !" }),
  otp: z.string().min(6, { error: "OTP must be at least 6 characters" }),
  "new-password": z
    .string()

    .regex(/[a-z]/, {
      error: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      error: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, { error: "Password must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, {
      error: "Password must contain at least one special character",
    })
    .min(8, { error: "Password must be at least 8 characters" })
    .max(32, { error: "Password must be at most 32 characters" }),
  "confirm-pass": z.string().min(1, { error: "Confirm password is required" }),
});

export const createEmailStepSchema = (
  t: ReturnType<typeof useTranslations>,
) => {
  return z.object({
    email: z.email({ error: t("required-error") }),
  });
};

export const otpStepSchema = forgetPassSchema.pick({ otp: true });

export const newPasswordSchema = forgetPassSchema
  .pick({ "new-password": true, "confirm-pass": true })
  .refine((values) => values["confirm-pass"] === values["new-password"], {
    error: "Passwords does not match !",
    path: ["confirm-pass"],
  });
