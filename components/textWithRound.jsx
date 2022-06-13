import { Round } from "./round";
import styles from "./textWithRound.module.css";
import classNames from "classnames";

export function TextWithRound({ boldText, text, className }) {
  return (
    <div className={classNames(className, styles.container)}>
      <Round className={styles.round} backgroundColor="#FFE193" />
      <strong>{boldText}</strong>
      <span>{text}</span>
    </div>
  );
}
