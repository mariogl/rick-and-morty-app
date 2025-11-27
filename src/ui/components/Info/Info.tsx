import classNames from "classnames";
import type { ComponentProps, PropsWithChildren } from "react";

import styles from "./Info.module.css";

interface InfoProps extends ComponentProps<"div"> {
  label: string;
}

const Info = ({
  className,
  label,
  children,
  ...props
}: PropsWithChildren<InfoProps>) => {
  const finalClassName = classNames(styles.detailItem, className);

  return (
    <div className={finalClassName} {...props}>
      <div className={styles.detailItem__name}>{label}</div>
      <div className={styles.detailItem__value}>{children}</div>
    </div>
  );
};

export default Info;
