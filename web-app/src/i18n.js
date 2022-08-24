import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import langEn from "./locale/lang.en.json";
import langKo from "./locale/lang.ko.json";

const resources = {
  en: {
    translation: langEn,
  },
  ko: {
    translation: langKo,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ko",
  debug: true,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
