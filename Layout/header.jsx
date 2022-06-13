import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/images/logo.png";
import BurgerIcon from "../assets/icons/burger.svg";
import CloseIcon from "../assets/icons/close.svg";
import { locales } from "../i18n/LocaleProvider";
import { useLocaleContext } from "../i18n/useLocaleContext";
import { useTranslate } from "../i18n/useTranslate";
import { BurgerMenu } from "./burgerMenu/burgerMenu";
import styles from "./index.module.css";

export function Header() {
  const { locale } = useLocaleContext();
  const { translate } = useTranslate();
  const [isBurgerOpened, setIsBurgerOpened] = useState();

  function handleToggleBurger() {
    setIsBurgerOpened(!isBurgerOpened);
  }

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Image className={styles.borderRadius} alt="logo" src={Logo} />
        </div>

        <button onClick={handleToggleBurger} className={styles.burgerButton}>
          <Image
            width={36}
            height={36}
            alt={isBurgerOpened ? "closeIcon" : "burgerMenu"}
            src={isBurgerOpened ? CloseIcon : BurgerIcon}
          />
        </button>
        <div className={styles.linksContainer}>
          <a className={styles.link}>{translate("header.overtax")}</a>
          <a className={styles.link}>{translate("header.price")}</a>
          <a className={styles.link}>{translate("header.aboutUs")}</a>
          <a className={styles.link}>{translate("header.contact")}</a>
        </div>

        <div className={styles.languageContainer}>
          <Link href="/ukr">
            <a
              className={
                locale === locales.ukrainian
                  ? styles.activeLocale
                  : styles.locale
              }
            >
              UKR
            </a>
          </Link>
          <Link href="/pl">
            <a
              className={
                locale === locales.ukrainian
                  ? styles.locale
                  : styles.activeLocale
              }
            >
              PL
            </a>
          </Link>
        </div>
      </div>
      {isBurgerOpened && <BurgerMenu />}
    </>
  );
}
