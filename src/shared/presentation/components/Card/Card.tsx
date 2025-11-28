import classNames from "classnames";
import type { ComponentProps } from "react";

import CardBody from "./CardBody";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";

import styles from "./Card.module.css";

interface CardProps extends ComponentProps<"article"> {
  type?: "floating" | "flat";
}

const Card = ({ type = "flat", className, children, ...props }: CardProps) => {
  const finalClassName = classNames(
    styles.card,
    type === "floating" && styles["card--floating"],
    className,
  );

  return (
    <article className={finalClassName} {...props}>
      {children}
    </article>
  );
};

Card.Image = CardImage;
Card.Title = CardTitle;
Card.Body = CardBody;

export default Card;
