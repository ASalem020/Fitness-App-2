import useLocale from "@/hooks/use-locale";
import { Languages } from "lucide-react";

export default function LanguagesButton() {
  const { locale, setLocale } = useLocale();

  const handleToggleLocale = () => {
    setLocale((prev: string) => (prev === "en" ? "ar" : "en"));
  };
  return (
    <div>
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
            {locale === "en" ? "AR" : "EN"}
          </span>
        </button>
      </div>
    </div>
  );
}
