import { z } from "zod";
import type { Translations } from "../types/global";

export const registerSchema = (t: Translations) =>
  z.object({
    firstName: z.string().min(3, t("firstNameRequired")),
    lastName: z.string().min(3, t("lastNameRequired")),
    email: z.string().email(t("emailRequired")),
    password: z
      .string()
      .min(8, t("passwordMinLength"))
      .max(32, t("passwordMaxLength"))
      .regex(/[a-z]/, {
        error: t("passwordLowercase"),
      })
      .regex(/[A-Z]/, {
        error: t("passwordUppercase"),
      })
      .regex(/[0-9]/, { error: t("passwordNumber") })
      .regex(/[^A-Za-z0-9]/, {
        error: t("passwordSpecial"),
      }),
    rePassword: z.string(),
  });
