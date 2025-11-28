import classNames from "classnames";
import type { ComponentProps } from "react";

import styles from "./Card.module.css";

type CardBodyProps = ComponentProps<"div">;

const CardBody = ({ className, children, ...props }: CardBodyProps) => {
  const finalClassName = classNames(styles.card__body, className);

  return (
    <div className={finalClassName} {...props}>
      {children}
    </div>
  );
};

export default CardBody;
