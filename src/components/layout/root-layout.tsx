import { Outlet } from "react-router-dom";
import Footer from "../shared/footer";
import { useTheme } from "@/hooks/use-theme";
import Header from "../shared/header";
import { Languages } from "lucide-react";
import useLocale from "@/hooks/use-locale";

export default function RootLayout() {
  // Hooks
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale } = useLocale();

  // Handlers
  const handleToggleLocale = () => {
    setLocale((prev: string) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <div
      className={`root-layout ${locale === "ar" ? "font-tajawal" : "font-baloo-thambi"}`}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
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

      {/* Locale Toggle Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleToggleLocale}
          className={`
            fixed bottom-24 right-9 z-50 flex items-center gap-2
            rounded-full transition-colors duration-200
            border border-gray-300 dark:border-gray-700
            bg-white/80 dark:bg-zinc-950/70
            hover:bg-primary hover:text-white hover:border-primary
            px-3 py-2
            min-w-[44px] min-h-[44px]
            text-xs font-semibold uppercase shadow-md
            md:min-w-[40px] md:py-1 md:px-2
            focus:outline-none focus:ring-2 focus:ring-primary
          `}
        >
          <Languages className="w-5 h-5" />
          <span className="hidden sm:block">
            {/* Show current locale in caps */}
            {locale.toUpperCase()}
          </span>
        </button>
      </div>
    </div>
  );
}
