import classnames from "classnames";
import type { ComponentProps, ElementType, PropsWithChildren } from "react";

import styles from "./Title.module.css";

interface TitleProps extends ComponentProps<"h1"> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  as?: "heading" | "text";
}

const Title = ({
  level,
  as = "heading",
  className,
  children,
  ...props
}: PropsWithChildren<TitleProps>) => {
  const finalClassName = classnames(
    styles.title,
    styles[`title--level${level}`],
    className,
  );

  const Tag = as === "text" ? "span" : (`h${level}` as ElementType);

  return (
    <Tag className={finalClassName} {...props}>
      {children}
    </Tag>
  );
};

export default Title;
