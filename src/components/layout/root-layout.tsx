import { Outlet } from "react-router-dom";
import Footer from "../shared/footer";
import { useTheme } from "@/hooks/use-theme";
import Header from "../shared/header";

export default function RootLayout() {
  // Hooks
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Header */}
      <Header />

      {/* Content Rendered */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* This Button for test dark mode only */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-9 right-9 z-50 flex size-12 items-center justify-center rounded-full bg-slate-800 text-xl text-slate-50 shadow-lg ring-1 ring-slate-900/10 transition-all duration-300 hover:scale-110 hover:bg-slate-700 hover:shadow-xl hover:ring-slate-900/20 active:scale-95 dark:bg-slate-800/80 dark:text-slate-300 dark:ring-white/10 dark:hover:bg-slate-700 dark:hover:text-white dark:hover:ring-white/20"
      >
        {theme === "light" ? "☀️" : "🌙"}
      </button>
    </>
  );
}
