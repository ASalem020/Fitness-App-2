import { IntlProvider } from "use-intl";
import TanstackQueryProvider from "./components/tanstack-query.provider";
import { ThemeProvider } from "./components/theme-provider";
import { messages } from "@/i18n/messages";
import { useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  // States
  const [locale, setLocale] = useState<"en" | "ar">("ar");

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ThemeProvider>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </ThemeProvider>
    </IntlProvider>
  );
}
