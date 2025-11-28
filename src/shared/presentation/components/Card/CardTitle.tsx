import classNames from "classnames";
import type { ComponentProps } from "react";

import Title from "@app/shared/presentation/components/Title/Title";

import styles from "./Card.module.css";

type CardTitleProps = ComponentProps<typeof Title>;

const CardTitle = ({
  className,
  level,
  children,
  ...props
}: CardTitleProps) => {
  const finalClassName = classNames(styles.card__title, className);

  return (
    <Title level={level} className={finalClassName} {...props}>
      {children}
    </Title>
  );
};

export default CardTitle;
