import { useEffect, useRef } from "react";
import { DropdownItem } from "./DropdownItem";
import type { DropdownMenuItem } from "../../types/dropdownMenuItem";
import { IconSize, IconSizeClassMap } from "../../styles/dimensions";

interface DropdownProps {
  items: DropdownMenuItem[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isLoading?: boolean;
}

export const Dropdown = ({
  items,
  isOpen,
  setIsOpen,
  isLoading = false,
}: DropdownProps) => {
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

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-20"
        onClick={() => setIsOpen(false)}
      />

      <div
        ref={dropdownRef}
        className={`flex flex-col gap-1 w- absolute top-full right-0 z-30  min-w-48  shadow-lg `}
        role="menu"
        aria-expanded={isOpen}
      >
        {items.map((item, index) => (
          <DropdownItem
            key={index}
            onClick={() => handleItemClick(item)}
            disabled={isLoading}
          >
            <div className="w-full flex flex-row gap-2 items-center">
              {item.icon && <item.icon className={`${IconSizeClassMap[IconSize.SM]}`} />}
              {item.label}
            </div>
          </DropdownItem>
        ))}
      </div>
    </>
  );
};
