import classNames from "classnames";
import type { ComponentProps, PropsWithChildren } from "react";

import GridItem from "./GridItem";

import styles from "./Grid.module.css";

type GridProps = ComponentProps<"ul">;

const Grid = ({
  className,
  children,
  ...props
}: PropsWithChildren<GridProps>) => {
  const finalClassName = classNames(styles.grid, className);

  return (
    <ul className={finalClassName} {...props}>
      {children}
    </ul>
  );
};

Grid.Item = GridItem;

export default Grid;
