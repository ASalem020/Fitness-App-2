import { Outlet } from "react-router-dom";
import Header from "../shared/header";
import Footer from "../shared/footer";
import { useTheme } from "@/hooks/use-theme";

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
        className="fixed bottom-9 right-9 rounded-full size-12 bg-slate-800 dark:bg-slate-400 text-slate-100 dark:text-slate-800 hover:scale-110 transition-transform duration-200 flex items-center justify-center font-semibold"
      >
        {theme === "light" ? "☀️" : "🌙"}
      </button>
    </>
  );
}
