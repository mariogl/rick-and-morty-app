import classNames from "classnames";
import type { ComponentProps, PropsWithChildren } from "react";

import styles from "./Card.module.css";
import CardBody from "./CardBody";

type CardProps = ComponentProps<"article">;

const Card = ({
  className,
  children,
  ...props
}: PropsWithChildren<CardProps>) => {
  const finalClassName = classNames(styles.card, className);

  return (
    <article className={finalClassName} {...props}>
      {children}
    </article>
  );
};

Card.Body = CardBody;

export default Card;
