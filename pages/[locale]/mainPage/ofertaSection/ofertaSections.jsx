import { TextWithRound } from "../../../../components/textWithRound";
import { useTranslate } from "../../../../i18n/useTranslate";
import { RoundWithIcon } from "../../../../components/roundWithIcon";
import CalculatorIcon from "../../../../assets/icons/calculator.svg";
import DocumentsIcon from "../../../../assets/icons/documents.svg";
import InvestmentIcon from "../../../../assets/icons/economic-investment.svg";
import SelectionIcon from "../../../../assets/icons/selection.svg";
import SettingsIcon from "../../../../assets/icons/settings.svg";
import styles from "./index.module.css";

export function OfertaSection() {
  const { translate } = useTranslate();

  return (
    <section className={styles.section}>
      <ul>
        <li className={styles.textWithRound}>
          <TextWithRound
            boldText={translate("services.oferta.info1.boldText")}
            text={translate("services.oferta.info1.text")}
          />
        </li>
        <li className={styles.textWithRound}>
          <TextWithRound
            boldText={translate("services.oferta.info2.boldText")}
            text={translate("services.oferta.info2.text")}
          />
        </li>
        <li className={styles.textWithRound}>
          <TextWithRound
            boldText={translate("services.oferta.info3.boldText")}
            text={translate("services.oferta.info3.text")}
          />
        </li>

        <h2 className={styles.h2}>{translate("header.overtax")}</h2>
        <li className={styles.iconsContainer}>
          <RoundWithIcon
            icon={CalculatorIcon}
            text={translate("services.oferta.iconsText.calculator")}
          />
          <RoundWithIcon
            icon={DocumentsIcon}
            text={translate("services.oferta.iconsText.documents")}
          />
          <RoundWithIcon
            icon={InvestmentIcon}
            text={translate("services.oferta.iconsText.investment")}
          />
          <RoundWithIcon
            icon={SelectionIcon}
            text={translate("services.oferta.iconsText.selection")}
          />
          <RoundWithIcon
            icon={SettingsIcon}
            text={translate("services.oferta.iconsText.settings")}
          />
        </li>
      </ul>
    </section>
  );
}
