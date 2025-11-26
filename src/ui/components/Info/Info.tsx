import type { PropsWithChildren } from "react";

import styles from "./Info.module.css";

interface InfoProps {
  label: string;
}

const Info = ({ label, children }: PropsWithChildren<InfoProps>) => {
  return (
    <div className={styles.detailItem}>
      <div className={styles.detailItem__name}>{label}</div>
      <div className={styles.detailItem__value}>{children}</div>
    </div>
  );
};

export default Info;
