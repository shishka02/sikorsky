import { useRouter } from "next/router";
import React, { createContext } from "react";

export const locales = {
  polish: "pl",
  ukrainian: "ukr",
};

export const LocaleContext = createContext({});

export function LocaleProvider({ children, locale }) {
  const router = useRouter();

  function setLocale(locale) {
    router.push(locale);
  }

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}
