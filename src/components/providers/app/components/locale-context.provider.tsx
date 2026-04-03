import { messages } from "@/i18n/messages";
import type { AppLocale } from "@/lib/types/global";
import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { IntlProvider } from "use-intl";

type LocaleContextProviderProps = {
  children: React.ReactNode;
};

type LocaleContextValue = {
  locale: AppLocale;
  setLocale: Dispatch<SetStateAction<AppLocale>>;
};

export const LocaleContext = createContext<LocaleContextValue | null>(null);

// Util
// i set here because it will use here only , over engineering to create separated file
// not use localStorage.getItem('locale') in useState directly , because this approach lead to bug in types
function readStoredLocale(): AppLocale {
  const raw = localStorage.getItem("locale");
  return raw === "en" || raw === "ar" ? raw : "en";
}

export default function LocaleContextProvider({
  children,
}: LocaleContextProviderProps) {
  // States
  const [locale, setLocale] = useState<AppLocale>(() => readStoredLocale());

  //   Effects
  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
