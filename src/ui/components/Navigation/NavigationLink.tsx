import { Link } from "@tanstack/react-router";
import classNames from "classnames";
import type { ComponentProps, PropsWithChildren } from "react";

import styles from "./Navigation.module.css";

interface NavigationLinkProps extends Omit<ComponentProps<"a">, "href"> {
  to: string;
}

const NavigationLink = ({
  to,
  className,
  children,
  ...props
}: PropsWithChildren<NavigationLinkProps>) => {
  const finalClassName = classNames(styles.navigation__link, className);

  return (
    <Link
      to={to}
      className={finalClassName}
      activeOptions={{ exact: true }}
      activeProps={{
        className: styles["navigation__link--active"],
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
