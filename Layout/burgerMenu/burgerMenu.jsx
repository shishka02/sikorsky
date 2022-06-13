import { useTranslate } from "../../i18n/useTranslate";
import styles from "./index.module.css";

export function BurgerMenu() {
  const { translate } = useTranslate();

  return (
    <div className={styles.container}>
      <button className={styles.link}>{translate("header.overtax")}</button>
      <button className={styles.link}>{translate("header.price")}</button>
      <button className={styles.link}>{translate("header.aboutUs")}</button>
      <button className={styles.link}>{translate("header.contact")}</button>
    </div>
  );
}
