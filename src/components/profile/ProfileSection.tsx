import { ChevronDown, ChevronUp, MoreVertical } from "lucide-react";
import type { DropdownMenuItem } from "../../types/dropdownMenuItem";
import { Menu } from "../ui/Menu";

interface ProfileSectionProps {
  label: string;
  isSectionOpen?: boolean;
  toggleIsSectionOpen?: () => void;
  menuItems?: DropdownMenuItem[];
  children: React.ReactNode;
}
export const ProfileSection = ({
  label,
  isSectionOpen,
  toggleIsSectionOpen,
  menuItems,
  children,
}: ProfileSectionProps) => {
  const isCollapsible =
    isSectionOpen !== undefined && toggleIsSectionOpen !== undefined;
  const isContentVisible = !isCollapsible || isSectionOpen;
  const Icon = isSectionOpen ? ChevronUp : ChevronDown;
  const isOptionManu = menuItems !== undefined;
  return (
    <>
      <div className="w-full flex flex-col items-start">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2">
            <span
              className="
            text-[12px] font-medium uppercase tracking-wider
            text-gray-500 dark:text-gray-400
                  "
            >
              {label}
            </span>
            {isCollapsible && (
              <Icon
                onClick={toggleIsSectionOpen}
                className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer text-gray-500 dark:text-gray-400"
                aria-label={isSectionOpen ? `Hide ${label}` : `Show ${label}`}
              />
            )}
          </div>
          {isOptionManu && (
            <Menu
              items={menuItems}
              Icon={
                MoreVertical 
              }
              
            ></Menu>
          )}
        </div>
        {isContentVisible && <div className="px-2 w-full py-1">{children}</div>}
      </div>
    </>
  );
};
