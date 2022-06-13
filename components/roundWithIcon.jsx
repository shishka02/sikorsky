import Image from "next/image";
import { Round } from "./round";
import styles from "./roundWithIcon.module.css";

export function RoundWithIcon({ icon, text }) {
  return (
    <div className={styles.container}>
      <Round className={styles.round} backgroundColor="#FFE193" />
      <Image alt={text + " icon"} src={icon} />
      <div className={styles.text}>{text}</div>
    </div>
  );
}
