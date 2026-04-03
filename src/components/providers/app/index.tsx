import TanstackQueryProvider from "./components/tanstack-query.provider";
import { ThemeProvider } from "./components/theme-provider";
import LocaleContextProvider from "./components/locale-context.provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocaleContextProvider>
      <ThemeProvider>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </ThemeProvider>
    </LocaleContextProvider>
  );
}
