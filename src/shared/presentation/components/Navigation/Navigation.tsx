import classNames from "classnames";
import type { ComponentProps } from "react";

import NavigationLink from "./NavigationLink";

import styles from "./Navigation.module.css";

type NavigationProps = ComponentProps<"nav">;

const Navigation = ({ className, children, ...props }: NavigationProps) => {
  const finalClassName = classNames(styles.navigation, className);

  return (
    <nav className={finalClassName} {...props}>
      {children}
    </nav>
  );
};

Navigation.Link = NavigationLink;

export default Navigation;
