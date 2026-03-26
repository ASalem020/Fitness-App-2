import TanstackQueryProvider from "./components/tanstack-query.provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <TanstackQueryProvider>{children}</TanstackQueryProvider>;
}
