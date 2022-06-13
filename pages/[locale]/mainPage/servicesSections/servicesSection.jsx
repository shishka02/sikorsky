import { Round } from "../../../../components/round";
import { useTranslate } from "../../../../i18n/useTranslate";
import classNames from "classnames";
import styles from "./index.module.css";

export function ServicesSection() {
  const { translate } = useTranslate();

  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <Round className={styles.round} />
        <h1 className={styles.title}>
          <div className={styles.titleOne}>{translate("services.title.1")}</div>
          <div className={styles.titleTwo}>{translate("services.title.2")}</div>
        </h1>
        <div className={styles.subTitle}>{translate("services.title.3")}</div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={classNames(styles.button, styles.yellowButton)}>
          {translate("header.overtax")}
        </button>
        <button className={classNames(styles.button, styles.blackButton)}>
          {translate("header.contact")}
        </button>
      </div>
      <div className={classNames(styles.titleContainer, styles.esTradeText)}>
        <div className={styles.titleTwo}>{translate("services.esTrade.1")}</div>
        <div className={styles.titleOne}>{translate("services.esTrade.2")}</div>
      </div>
      <div className={styles.yellowContainer}>
        <div>{translate("services.esTrade.1")}</div>
      </div>
    </section>
  );
}
