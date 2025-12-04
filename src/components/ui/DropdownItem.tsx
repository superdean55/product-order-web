import React from "react";
import Button from "./Button";

interface DropdownItemProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export const DropdownItem = ({
  onClick,
  disabled = false,
  children,
}: DropdownItemProps) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      role="menuitem"
      tabIndex={-1}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
