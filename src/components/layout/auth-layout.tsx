import { Outlet } from "react-router-dom";
import { useLocale } from "use-intl";

export default function AuthLayout() {
  // Translation
  const locale = useLocale();

  return (
    <div
      className="grid grid-cols-2 min-h-screen"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {/* Left Part */}
      <div className="flex items-center justify-center border-r border-orange-600 bg-orange-50">
        left-part
      </div>

      {/* Right Part */}
      <div className="flex items-center justify-center bg-black/75">
        <Outlet />
      </div>
    </div>
  );
}
