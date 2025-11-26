import classNames from "classnames";
import type { ComponentProps, PropsWithChildren } from "react";

import CardBody from "./CardBody";
import CardImage from "./CardImage";

import styles from "./Card.module.css";

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
Card.Image = CardImage;

export default Card;
