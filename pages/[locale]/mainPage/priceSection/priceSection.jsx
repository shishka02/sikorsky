import { useTranslate } from "../../../../i18n/useTranslate";
import styles from "./index.module.css";
import classNames from "classnames";

export function PriceSection() {
  const { translate } = useTranslate();

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{translate("services.price.title")}</h2>
      <div className={styles.priceDescription}>
        {translate("services.price.description")}
      </div>
      <div className={styles.accountantContainer}>
        <h3 className={styles.accountantTitle}>
          {translate("services.price.accountant.title")}
        </h3>
        <ul>
          <li className={styles.hrText}>
            {translate("services.price.accountant.list.1")}
          </li>
          <li className={styles.hrText}>
            {translate("services.price.accountant.list.2")}
          </li>
          <li className={styles.hrText}>
            {translate("services.price.accountant.list.3")}
          </li>
        </ul>
        <div className={styles.marginTop28px}>
          <strong className={styles.hrTitle}>
            {translate("services.price.hr.title")}
          </strong>
          <div className={styles.hrText}>
            {translate("services.price.hr.description")}
          </div>
        </div>
        <div className={classNames(styles.hrText, styles.marginTop28px)}>
          <strong>{translate("services.price.hr.list.1.boldText")}</strong>
          {translate("services.price.hr.list.1.text")}
        </div>
        <div className={styles.hrText}>
          <strong>{translate("services.price.hr.list.2.boldText")}</strong>
          {translate("services.price.hr.list.2.text")}
        </div>
        <div className={styles.hrText}>
          <strong>{translate("services.price.hr.list.3.boldText")}</strong>
          {translate("services.price.hr.list.2.text")}
        </div>
      </div>
    </section>
  );
}
