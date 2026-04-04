import { heroAr } from "./ar/home";
import { formEn, formValidationEn } from "./en/register";
import { heroEn } from "./en/home";
import { formAr, formValidationAr } from "./ar/register";
import {
  ageEn,
  genderEn,
  goalEn,
  heightEn,
  levelsEn,
  weightEn,
} from "./en/kyc";
import {
  ageAr,
  genderAr,
  goalAr,
  heightAr,
  levelsAr,
  weightAr,
} from "./ar/kyc";

export const messages = {
  en: {
    home: {
      hero: heroEn,
    },
    register: {
      form: formEn,
      formValidation: formValidationEn,
    },
    kyc: {
      genderStep: genderEn,
      ageStep: ageEn,
      weightStep: weightEn,
      heightStep: heightEn,
      goalStep: goalEn,
      levelStep: levelsEn,
      nextButton: "Next",
      finishButton: "Finish",
    },
  },
  ar: {
    home: {
      hero: heroAr,
    },
    register: {
      form: formAr,
      formValidation: formValidationAr,
    },
    kyc: {
      genderStep: genderAr,
      ageStep: ageAr,
      weightStep: weightAr,
      heightStep: heightAr,
      goalStep: goalAr,
      levelStep: levelsAr,
      nextButton: "التالي",
      finishButton: "إنهاء",
    },
  },
};
