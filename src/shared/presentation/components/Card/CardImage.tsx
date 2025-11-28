import classNames from "classnames";
import type { ComponentProps } from "react";

import styles from "./Card.module.css";

interface CardImageProps extends ComponentProps<"img"> {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const CardImage = ({
  className,
  alt,
  width,
  height,
  ...props
}: CardImageProps) => {
  const finalClassName = classNames(styles.card__image, className);

  return (
    <img
      className={finalClassName}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
};

export default CardImage;
