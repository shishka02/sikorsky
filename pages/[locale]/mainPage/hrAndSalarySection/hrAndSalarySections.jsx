import { TextWithRound } from "../../../../components/textWithRound";
import { locales } from "../../../../i18n/LocaleProvider";
import { useLocaleContext } from "../../../../i18n/useLocaleContext";
import { useTranslate } from "../../../../i18n/useTranslate";
import styles from "./index.module.css";

export function HrAndSalarySection() {
  const { translate } = useTranslate();
  const { locale } = useLocaleContext();

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        {translate("services.hrAndSalary.title")}
      </h2>

      <ul>
        <li className={styles.infoContainer}>
          <TextWithRound
            boldText={translate("services.hrAndSalary.info.1.boldText")}
            text={translate("services.hrAndSalary.info.1.text")}
          />
        </li>
        <li className={styles.infoContainer}>
          <TextWithRound
            boldText={translate("services.hrAndSalary.info.2.boldText")}
            text={translate("services.hrAndSalary.info.2.text")}
          />
        </li>
        <li className={styles.infoContainer}>
          <TextWithRound
            boldText={translate("services.hrAndSalary.info.3.boldText")}
            text={translate("services.hrAndSalary.info.3.text")}
          />
        </li>
        <li className={styles.infoContainer}>
          <TextWithRound
            boldText={translate("services.hrAndSalary.info.4.boldText")}
            text={translate("services.hrAndSalary.info.4.text")}
          />
        </li>
        <li className={styles.infoContainer}>
          <TextWithRound
            boldText={translate("services.hrAndSalary.info.5.boldText")}
            text={translate("services.hrAndSalary.info.5.text")}
          />
        </li>
        <li className={styles.infoContainer}>
          <TextWithRound
            boldText={translate("services.hrAndSalary.info.6.boldText")}
            text={translate("services.hrAndSalary.info.6.text")}
          />
        </li>
        <li className={styles.infoContainer}>
          <TextWithRound
            boldText={translate("services.hrAndSalary.info.7.boldText")}
            text={translate("services.hrAndSalary.info.7.text")}
          />
        </li>
        {locale === locales.polish && (
          <>
            <li className={styles.infoContainer}>
              <TextWithRound
                boldText={translate("services.hrAndSalary.info.8.boldText")}
                text={translate("services.hrAndSalary.info.8.text")}
              />
            </li>
            <li className={styles.infoContainer}>
              <TextWithRound
                boldText={translate("services.hrAndSalary.info.9.boldText")}
                text={translate("services.hrAndSalary.info.9.text")}
              />
            </li>
            <li className={styles.infoContainer}>
              <TextWithRound
                boldText={translate("services.hrAndSalary.info.10.boldText")}
                text={translate("services.hrAndSalary.info.10.text")}
              />
            </li>
            <li className={styles.infoContainer}>
              <TextWithRound
                boldText={translate("services.hrAndSalary.info.11.boldText")}
                text={translate("services.hrAndSalary.info.11.text")}
              />
            </li>
            <li className={styles.infoContainer}>
              <TextWithRound
                boldText={translate("services.hrAndSalary.info.12.boldText")}
                text={translate("services.hrAndSalary.info.12.text")}
              />
            </li>
          </>
        )}
      </ul>
    </section>
  );
}
