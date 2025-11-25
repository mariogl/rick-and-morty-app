import classNames from "classnames";
import type { ComponentProps, PropsWithChildren } from "react";

import AppContainer from "../AppContainer/AppContainer";
import styles from "./MainHeader.module.css";

type MainHeaderProps = ComponentProps<"header">;

const MainHeader = ({
  className,
  children,
  ...props
}: PropsWithChildren<MainHeaderProps>) => {
  const finalClassName = classNames(styles["main-header"], className);

  return (
    <header className={finalClassName} {...props}>
      <AppContainer className={styles["main-header__container"]}>
        {children}
      </AppContainer>
    </header>
  );
};

export default MainHeader;
