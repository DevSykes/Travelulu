import { localsES } from "./ES";
import { localsEN } from "./EN";

const translations = {
  es: localsES,
  en: localsEN,
};

export const getTranslation = (lang) => {
  return translations[lang] || translations["es"];
};
