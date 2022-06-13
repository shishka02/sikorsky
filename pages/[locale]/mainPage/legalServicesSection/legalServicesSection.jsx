import { useTranslate } from "../../../../i18n/useTranslate";
import styles from "./index.module.css";
import { Round } from "../../../../components/round";

export function LegalServicesSection() {
  const { translate } = useTranslate();

  return (
    <section className={styles.section}>
      <div className={styles.roundsContainer}>
        <Round className={styles.bigRound} backgroundColor="#FFC226">
          <h2 className={styles.title}>
            {translate("services.legalAndServices.title")}
          </h2>
          {translate("services.legalAndServices.legalContent")}
        </Round>
      </div>
      <h2 className={styles.helpTitle}>
        {translate("services.legalAndServices.helpTitle")}
      </h2>
      <ul>
        <li className={styles.listItem}>
          {translate("services.legalAndServices.list.1")}
        </li>
        <li className={styles.listItem}>
          {translate("services.legalAndServices.list.2.title")}
          <div className={styles.subListItem}>
            {translate("services.legalAndServices.list.2.description")}
          </div>
        </li>
        <li className={styles.listItem}>
          {translate("services.legalAndServices.list.4.title")}
          <div className={styles.subListItem}>
            {translate("services.legalAndServices.list.4.description")}
          </div>
        </li>
        <li className={styles.listItem}>
          {translate("services.legalAndServices.list.3")}
        </li>
      </ul>
    </section>
  );
}
