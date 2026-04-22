import type { messages } from "@/i18n/messages";
<<<<<<< HEAD

export type AppLocale = keyof typeof messages;
=======
import { getTranslations } from "next-intl/server";

export type AppLocale = keyof typeof messages;

export type Translations = Awaited<ReturnType<typeof getTranslations>>;
>>>>>>> ef8dcfbe79c2939a93c080e0e5f8ff7143427ed0
