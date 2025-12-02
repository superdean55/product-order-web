import React from "react";
import Button from "./Button";

interface DropdownItemProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  onClick,
  children,
}) => {
  
  return (
    <Button type="button" onClick={onClick} role="menuitem" tabIndex={-1}>
      {children}
    </Button>
  );
};
