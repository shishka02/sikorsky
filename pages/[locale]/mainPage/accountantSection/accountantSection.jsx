import { useTranslate } from "../../../../i18n/useTranslate";
import styles from "./index.module.css";
import { Round } from "../../../../components/round";

export function AccountantSection() {
  const { translate } = useTranslate();

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{translate("services.accountantTitle")}</h2>
      <div className={styles.roundsContainer}>
        <Round className={styles.bigRound} backgroundColor="white">
          {translate("services.accountant")}
          <Round className={styles.smallRound} />
        </Round>
      </div>
    </section>
  );
}
