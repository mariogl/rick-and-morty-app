import classNames from "classnames";
import type { ComponentProps } from "react";

import style from "./Button.module.css";

type ButtonProps = ComponentProps<"button">;

const Button = ({ className, children, ...props }: ButtonProps) => {
  const finalClassName = classNames(style.button, className);

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
