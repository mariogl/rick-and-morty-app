import classNames from "classnames";
import type { ComponentProps, PropsWithChildren } from "react";

import GridItem from "./GridItem";

import styles from "./Grid.module.css";

interface GridProps extends ComponentProps<"ul"> {
  size?: "normal" | "large";
}

const Grid = ({
  className,
  size = "normal",
  children,
  ...props
}: PropsWithChildren<GridProps>) => {
  const finalClassName = classNames(
    styles.grid,
    size === "large" && styles["grid--large"],
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
