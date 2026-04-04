import type { useTranslations } from "use-intl";
import z from "zod";

export const createEmailStepSchema = (
  t: ReturnType<typeof useTranslations>,
) => {
  return z.object({
    email: z.email({ error: t("required-error") }),
  });
};

export const createOtpStepSchema = (t: ReturnType<typeof useTranslations>) => {
  return z.object({
    otp: z.string().min(6, { error: t("min-error") }),
  });
};

export const createNewPasswordSchema = (
  t: ReturnType<typeof useTranslations>,
) => {
  return z
    .object({
      "new-password": z
        .string()
        .regex(/[a-z]/, {
          error: t("lowercase-error"),
        })
        .regex(/[A-Z]/, {
          error: t("uppercase-error"),
        })
        .regex(/[0-9]/, { error: t("number-error") })
        .regex(/[^A-Za-z0-9]/, {
          error: t("special-character-error"),
        })
        .min(8, { error: t("min-error") })
        .max(32, { error: t("max-error") }),
      "confirm-pass": z
        .string()
        .min(1, { error: t("confirm-pass-required-error") }),
    })
    .refine((values) => values["confirm-pass"] === values["new-password"], {
      error: t("not-match-error"),
      path: ["confirm-pass"],
    });
};
