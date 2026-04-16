import { emailStepAr, newPassStepAr, otpStepAr } from "./ar/forget-pass";
import { headerAr } from "./ar/header";
import { heroAr, whyUsAr } from "./ar/home";
import { emailStepEn, newPassStepEn, otpStepEn } from "./en/forget-pass";
import { headerEn } from "./en/header";
import { heroEn, whyUsEn } from "./en/home";

export const messages = {
  en: {
    header: headerEn,
    home: {
      hero: heroEn,
      "why-us": whyUsEn,
    },
    "forget-pass": {
      "email-step": emailStepEn,
      "otp-step": otpStepEn,
      "new-pass-step": newPassStepEn,
    },
  },
  ar: {
    header: headerAr,
    home: {
      hero: heroAr,
      "why-us": whyUsAr,
    },
    "forget-pass": {
      "email-step": emailStepAr,
      "otp-step": otpStepAr,
      "new-pass-step": newPassStepAr,
    },
  },
};
