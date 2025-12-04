import { useState } from "react";
import Button from "./Button";
import { ButtonColor } from "../../constants/buttonColors";
import { Dropdown } from "./DropdownMenu";
import type { DropdownMenuItem } from "../../types/dropdownMenuItem";
import type { LucideIcon } from "lucide-react";

interface MenuProps {
  items: DropdownMenuItem[];
  Icon: LucideIcon;
  isLoading?: boolean;
}

export const Menu = ({ items, Icon, isLoading }: MenuProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <Button
        buttonColor={ButtonColor.minimal}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <Icon className="w-6 h-6 text-gray-500 dark:text-gray-100 hover:text-blue-400 dark:hover:text-gray-400 cursor-pointer"/>
      </Button>
      <Dropdown
        isOpen={isDropdownOpen}
        setIsOpen={setIsDropdownOpen}
        items={items}
        isLoading={isLoading}
      ></Dropdown>
    </div>
  );
};
