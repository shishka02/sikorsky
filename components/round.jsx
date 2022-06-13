import classNames from "classnames";
import styles from "./round.module.css";

export function Round({
  height = 30,
  width = 30,
  backgroundColor = "#ffc226",
  className,
  children,
}) {
  return (
    <div
      style={{ height, width, backgroundColor }}
      className={classNames(className, styles.round)}
    >
      {children}
    </div>
  );
}
