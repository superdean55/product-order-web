// src/components/ui/KebabMenu.tsx

import React, { useState } from "react";
import { MoreVertical } from "lucide-react";
import Button from "./Button";
import { ButtonColor } from "../../constants/buttonColors";
import { Dropdown } from "./DropdownMenu";
import type { DropdownMenuItem } from "../../types/dropdownMenuItem";

interface KebabMenuProps {
  items: DropdownMenuItem[];
}

export const KebabMenu: React.FC<KebabMenuProps> = ({ items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <Button
        buttonColor={ButtonColor.minimal}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      </Button>
      <Dropdown
        isOpen={isDropdownOpen}
        setIsOpen={setIsDropdownOpen}
        items={items}
      ></Dropdown>
    </div>
  );
};
