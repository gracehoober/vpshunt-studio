// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
  },
  lng: "en", // default language
  fallbackLng: "en",

  interpolation: {
    escapeValue: false, // react already escapes by default
  },
});

export default i18n;
