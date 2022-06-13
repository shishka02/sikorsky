import { useContext } from "react";
import { LocaleContext, locales } from "./LocaleProvider";

export const useLocaleContext = () => {
  const { locale = "pl", setLocale = () => {} } = useContext(LocaleContext);

  function setLocaleHandler(locale) {
    const availableLocales = Object.values(locales);
    const isLocaleAvailable = Boolean(
      availableLocales.find((i) => i === locale)
    );

    if (isLocaleAvailable) {
      setLocale(locale);
    } else {
      setLocale(locales.polish);
    }
  }

  return { locale, setLocale: setLocaleHandler };
};
