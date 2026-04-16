import { emailStepAr, newPassStepAr, otpStepAr } from "./ar/forget-pass";
import { headerAr } from "./ar/header";
import { heroAr, whyUsAr } from "./ar/home";
import {
  genderAr,
  ageAr,
  weightAr,
  heightAr,
  goalAr,
  levelsAr,
} from "./ar/kyc";
import { formAr, formValidationAr } from "./ar/register";
import { emailStepEn, newPassStepEn, otpStepEn } from "./en/forget-pass";
import { headerEn } from "./en/header";
import { heroEn, whyUsEn } from "./en/home";
import {
  genderEn,
  ageEn,
  weightEn,
  heightEn,
  goalEn,
  levelsEn,
} from "./en/kyc";
import { formEn, formValidationEn } from "./en/register";

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
