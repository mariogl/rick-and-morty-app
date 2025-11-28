import classNames from "classnames";
import type { ComponentProps } from "react";

import DropdownItem from "./DropdownItem";

import styles from "./Dropdown.module.css";

interface DropdownProps extends ComponentProps<"select"> {
  label: string;
  id: string;
}

const Dropdown = ({
  label,
  id,
  className,
  children,
  ...props
}: DropdownProps) => {
  const finalClassName = classNames(styles.dropdown, className);

  return (
    <div className={finalClassName}>
      <label htmlFor={id}>{label}</label>
      <select id={id} className={styles.dropdown__select} {...props}>
        {children}
      </select>
    </div>
  );
};

Dropdown.Item = DropdownItem;

export default Dropdown;
