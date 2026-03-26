import TanstackQueryProvider from "./components/tanstack-query.provider";
import { ThemeProvider } from "./components/theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </ThemeProvider>
  );
}
