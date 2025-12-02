import React, { useEffect, useRef } from "react";
import { DropdownItem } from "./DropdownItem";
import type { DropdownMenuItem } from "../../types/dropdownMenuItem";

interface DropdownProps {
  items: DropdownMenuItem[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  items,
  isOpen,
  setIsOpen,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleItemClick = (item: DropdownMenuItem) => {
    item.action();
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);
  return (
    isOpen && (
      <div
        ref={dropdownRef}
        className={`flex flex-col absolute top-full right-0 z-30  min-w-48  bg-gray-400 dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 p-1`}
        role="menu"
        aria-expanded={isOpen}
      >
        {items.map((item, index) => (
          <DropdownItem key={index} onClick={() => handleItemClick(item)}>
            {item.label}
          </DropdownItem>
        ))}
      </div>
    )
  );
};
