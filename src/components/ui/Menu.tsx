import { useState } from "react";
import { Dropdown } from "./DropdownMenu";
import type { DropdownMenuItem } from "../../types/dropdownMenuItem";
import type { LucideIcon } from "lucide-react";
import { IconButton } from "./IconButton";

interface MenuProps {
  items: DropdownMenuItem[];
  Icon: LucideIcon;
  isLoading?: boolean;
}

export const Menu = ({ items, Icon, isLoading }: MenuProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <IconButton Icon={Icon} onClick={() => setIsDropdownOpen((prev) => !prev)}/>
      <Dropdown
        isOpen={isDropdownOpen}
        setIsOpen={setIsDropdownOpen}
        items={items}
        isLoading={isLoading}
      ></Dropdown>
    </div>
  );
};
