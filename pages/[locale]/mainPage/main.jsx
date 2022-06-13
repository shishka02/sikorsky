import { AccountantSection } from "./accountantSection/accountantSection";
import { OfertaSection } from "./ofertaSection/ofertaSections";
import { ServicesSection } from "./servicesSections/servicesSection";
import { HrAndSalarySection } from "./hrAndSalarySection/hrAndSalarySections";
import { LegalServicesSection } from "./legalServicesSection/legalServicesSection";
import styles from "./index.module.css";
import { PriceSection } from "./priceSection/priceSection";

export function Main() {
  return (
    <>
      <ServicesSection />
      <OfertaSection />
      <AccountantSection />
      <div className={styles.hrImageContainer} />
      <HrAndSalarySection />
      <LegalServicesSection />
      <div className={styles.handWithChartImageContainer} />
      <PriceSection />
    </>
  );
}
