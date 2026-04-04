import type { messages } from "@/i18n/messages";
import { getTranslations } from "next-intl/server";

export type AppLocale = keyof typeof messages;

export type Translations = Awaited<ReturnType<typeof getTranslations>>;
