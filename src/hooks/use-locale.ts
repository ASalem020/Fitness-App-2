import { LocaleContext } from "@/components/providers/app/components/locale-context.provider";
import { useContext } from "react";

export default function useLocale() {
  // Contexts
  const ctx = useContext(LocaleContext);

  if (ctx == null) {
    throw new Error("useLocale must be used within LocaleContextProvider");
  }

  return ctx;
}
