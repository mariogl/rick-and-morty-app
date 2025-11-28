import classNames from "classnames";
import type { ComponentProps } from "react";

import styles from "./Panel.module.css";

type PanelProps = ComponentProps<"div">;

const Panel = ({ className, children, ...props }: PanelProps) => {
  const finalClassName = classNames(styles.panel, className);

  return (
    <div className={finalClassName} {...props}>
      {children}
    </div>
  );
};

export default Panel;
