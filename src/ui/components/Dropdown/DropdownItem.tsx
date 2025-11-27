import type { ComponentProps, PropsWithChildren } from "react";

type DropdownItemProps = ComponentProps<"option">;

const DropdownItem = ({
  children,
  ...props
}: PropsWithChildren<DropdownItemProps>) => {
  return <option {...props}>{children}</option>;
};

export default DropdownItem;
