import classNames from "classnames";
import type { ComponentProps } from "react";

import styles from "./AppContainer.module.css";

type AppContainerProps = ComponentProps<"div">;

const AppContainer = ({ className, children, ...props }: AppContainerProps) => {
  const finalClassName = classNames(styles["app-container"], className);

  return (
    <div className={finalClassName} {...props}>
      {children}
    </div>
  );
};

export default AppContainer;
