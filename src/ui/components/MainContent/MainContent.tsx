import classNames from "classnames";
import type { ComponentProps, PropsWithChildren } from "react";

import styles from "./MainContent.module.css";

type MainContentProps = ComponentProps<"main">;

const MainContent = ({
  className,
  children,
  ...props
}: PropsWithChildren<MainContentProps>) => {
  const finalClassName = classNames(styles.mainContent, className);

  return (
    <main className={finalClassName} {...props}>
      {children}
    </main>
  );
};

export default MainContent;
