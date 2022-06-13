import { useTranslate } from "../../i18n/useTranslate";
import Image from "next/image";
import styles from "./index.module.css";
import GoogleIcon from "../../assets/icons/google.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import Logo from "../../assets/images/logo.png";

export function Footer() {
  const { translate } = useTranslate();

  return (
    <footer className={styles.footer}>
      <div className={styles.flexContainer}>
        <div>
          <div>ES Trade Sp. z o.o.</div>
          <div>ul. Dworcowa 81/206</div>
          <div>85 – 060 Bydgoszc</div>
          <div>woj. kujawsko – pomorskie</div>
          <div>KRS: 0000784251,</div>
          <div>NIP:  6342958146,</div>
          <div>Regon: 383225529</div>
        </div>
        <div>
          <div>Godziny otwarcia:</div>
          <div> pon – pt : 9:00 – 19:00</div>
          <div>85 – 060 Bydgoszc</div>
          <div>Kontakt</div>
          <div>tel. kom: +48 735 475 342</div>
          <div>e-mail:biuro@estrade.pl</div>
        </div>
        <div>
          <div className={styles.flexContainer}>
            <a href="">
              <Image src={GoogleIcon} />
            </a>
            <a className={styles.link} href="">
              <Image src={FacebookIcon} />
            </a>
            <a className={styles.link} href="">
              <Image src={InstagramIcon} />
            </a>
          </div>
          <div className={styles.logo}>
            <Image layout="fill" objectFit="cover" src={Logo} />
          </div>
        </div>
      </div>
    </footer>
  );
}
