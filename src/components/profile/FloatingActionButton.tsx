import type { LucideIcon } from "lucide-react";
import type { FloatingPositionValue } from "../../constants/floatingButtonPosition";

interface FloatingActionButtonProps {
  onClick: () => void;
  Icon: LucideIcon;
  title: string;
  position: FloatingPositionValue;
  className?: string;
  disabled?: boolean;
}

export const FloatingActionButton = ({
  onClick,
  Icon,
  title,
  position,
  className = "",
  disabled,
}: FloatingActionButtonProps) => {
  const baseClasses = `
    absolute ${position} 
    text-gray-700 dark:text-gray-100
    bg-black/30 hover:bg-black/50
    p-2 rounded-full shadow-lg 
    transition-colors duration-200 
    focus:outline-none focus:ring-2 focus:ring-gray-700 cursor-pointer
    ${className}
  `;

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      aria-label={title}
      title={title}
      disabled={disabled}
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
};
