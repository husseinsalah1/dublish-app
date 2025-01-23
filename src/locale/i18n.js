// src/locales/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import en from "./en.json";
import ar from "./ar.json";

i18n
  .use(LanguageDetector) // Detect user's language automatically
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: localStorage.getItem("lang") || "ar", // Default language
    fallbackLng: "en", // Default language
    debug: true, // Set to false in production
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });

export default i18n;
