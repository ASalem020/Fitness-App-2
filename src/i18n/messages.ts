import { headerAr } from "./ar/header";
import { heroAr, whyUsAr } from "./ar/home";
import { headerEn } from "./en/header";
import { heroEn, whyUsEn } from "./en/home";

export const messages = {
  en: {
    header: headerEn,
    home: {
      hero: heroEn,
      "why-us": whyUsEn,
    },
  },
  ar: {
    header: headerAr,
    home: {
      hero: heroAr,
      "why-us": whyUsAr,
    },
  },
};
