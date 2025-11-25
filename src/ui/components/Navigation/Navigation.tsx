import classNames from "classnames";
import type { ComponentProps, PropsWithChildren } from "react";

import styles from "./Navigation.module.css";
import NavigationLink from "./NavigationLink";

type NavigationProps = ComponentProps<"nav">;

const Navigation = ({
  className,
  children,
  ...props
}: PropsWithChildren<NavigationProps>) => {
  const finalClassName = classNames(styles.navigation, className);

  return (
    <nav className={finalClassName} {...props}>
      {children}
    </nav>
  );
};

Navigation.Link = NavigationLink;

export default Navigation;
