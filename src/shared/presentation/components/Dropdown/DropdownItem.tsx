import type { ComponentProps } from "react";

type DropdownItemProps = ComponentProps<"option">;

const DropdownItem = ({ children, ...props }: DropdownItemProps) => {
  return <option {...props}>{children}</option>;
};

export default DropdownItem;
