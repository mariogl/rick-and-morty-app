import classNames from "classnames";
import type { ComponentProps } from "react";

import styles from "./TextBox.module.css";

interface TextBoxProps extends ComponentProps<"input"> {
  label: string;
  id: string;
}

const TextBox = ({ label, id, className, ...props }: TextBoxProps) => {
  const finalClassName = classNames(styles.textbox, className);

  return (
    <div className={finalClassName}>
      <label htmlFor={id}>{label}</label>
      <input id={id} className={styles.textbox__input} {...props} />
    </div>
  );
};

export default TextBox;
