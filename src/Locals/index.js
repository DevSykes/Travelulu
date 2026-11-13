import { localsES } from "./ES.js";
import { localsEN } from "./EN.js";

const translations = {
  es: localsES,
  en: localsEN,
};

export const getTranslation = (lang) => {
  return translations[lang] || translations["es"];
};
