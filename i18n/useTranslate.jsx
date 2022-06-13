import { useMemo } from "react";
import { locales } from "./LocaleProvider";
import polishDictionary from "./dictionaries/pl.json";
import ukrainianDictionary from "./dictionaries/ukr.json";
import { useLocaleContext } from "./useLocaleContext";

export const useTranslate = () => {
  const { locale } = useLocaleContext();

  const currentDictionary = useMemo(() => {
    return locale === locales.ukrainian
      ? ukrainianDictionary
      : polishDictionary;
  }, [locale]);

  function translate(pathString) {
    return parseDictionary(currentDictionary, pathString);
  }

  return { translate };
};

function parseDictionary(dictionary, pathString) {
  let translation = dictionary;
  const pathArray = pathString.split(".");

  pathArray.forEach((i) => {
    translation = translation?.[i];
  });

  return translation ?? pathString;
}
