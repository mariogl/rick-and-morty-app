import classNames from "classnames";
import type { ComponentProps, PropsWithChildren } from "react";

import styles from "./Grid.module.css";

type GridItemProps = ComponentProps<"li">;

const GridItem = ({
  className,
  children,
  ...props
}: PropsWithChildren<GridItemProps>) => {
  const finalClassName = classNames(styles.grid__item, className);

  return (
    <li className={finalClassName} {...props}>
      {children}
    </li>
  );
};

export default GridItem;
