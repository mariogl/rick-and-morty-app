import classNames from "classnames";
import type { ComponentProps, PropsWithChildren } from "react";

import GridItem from "./GridItem";

import styles from "./Grid.module.css";

interface GridProps extends ComponentProps<"ul"> {
  fixedColumns?: number;
}

const Grid = ({
  className,
  fixedColumns,
  children,
  ...props
}: PropsWithChildren<GridProps>) => {
  const finalClassName = classNames(
    styles.grid,
    fixedColumns && styles["grid--fixed-columns"],
    className,
  );

  return (
    <ul className={finalClassName} {...props}>
      {children}
    </ul>
  );
};

Grid.Item = GridItem;

export default Grid;
