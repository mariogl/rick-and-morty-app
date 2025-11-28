import classNames from "classnames";
import type { ComponentProps } from "react";

import styles from "./Info.module.css";

interface InfoProps extends ComponentProps<"div"> {
  label: string;
}

const Info = ({ className, label, children, ...props }: InfoProps) => {
  const finalClassName = classNames(styles.detailItem, className);

  return (
    <div className={finalClassName} {...props}>
      <div className={styles.detailItem__name}>{label}</div>
      <div className={styles.detailItem__value}>{children}</div>
    </div>
  );
};

export default Info;
