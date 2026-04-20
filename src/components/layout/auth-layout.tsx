import { Outlet } from "react-router-dom";
import logo from "../../assets/images/logo-text-white.png";
import useLocale from "@/hooks/use-locale";
import LanguagesButton from "../shared/languages-button";

export default function AuthLayout() {
  // Hooks
  const { locale } = useLocale();

  return (
    /**
     * Full-viewport wrapper that breaks out of any centered #root container.
     */
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`absolute left-0 top-0 flex h-screen overflow-hidden w-screen m-0 p-0 border-none bg-black ${locale === "ar" ? "font-tajawal" : "font-baloo-thambi"}`}
    >
      {/* ── Full-screen blurred background ── */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/auth-layout-bg.png')] blur-xl" />

      {/* ── Dark scrim on top of blurred bg ── */}
      <div className="absolute w-full h-full inset-0 bg-black/40" />

      {/* ── Two-column content ── */}
      <div className="relative z-10 flex w-full h-screen">
        {/* ════ LEFT SECTION ════ */}
        <div className="hidden lg:flex flex-col items-center justify-center ltr:border-r-2 rtl:border-l-2 border-[#FF4100]/20 w-[49%] px-6 h-full relative overflow-hidden">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Super Fitness logo"
              className="w-40  object-cover select-none translate-y-20"
              draggable="false"
            />
          </div>
          {/* 3-D character */}
          <img
            src="/auth-layout-left.png"
            alt="3D fitness trainer"
            draggable="false"
            className="select-none object-contain w-full max-w-96 "
          />
        </div>

        {/* ════ RIGHT SECTION ════ */}
        <div className="flex flex-col flex-1 items-center justify-center px-6 py-12">
          {/* 
            The Outlet renders the specific auth page (e.g. Login, Forgot Password).
            The title and frosted form container are defined inside those pages 
            (using FormContainer) so that titles can appear floating above the form. 
          */}
          <div className="w-full flex justify-center">
            <Outlet />
          </div>
        </div>
      </div>
      <LanguagesButton />
    </div>
  );
}
