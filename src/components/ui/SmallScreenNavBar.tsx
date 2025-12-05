import type { LucideIcon } from "lucide-react";

interface SmallScreenNavBarItem {
  value: string;
  icon: LucideIcon;
  label: string;
}

interface SmallScreenNavBarProps {
  items: SmallScreenNavBarItem[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

interface SmallScreenNavBarItemProps {
  item: SmallScreenNavBarItem;
  isSelected: boolean;
  onSelect: () => void;
}

const SmallScreenNavBarItem = ({
  item,
  isSelected,
  onSelect,
}: SmallScreenNavBarItemProps) => {
  const Icon = item.icon;

  const buttonClasses = isSelected
    ? "text-blue-400 dark:text-gray-100 font-semibold bg-gray-900 rounded-2xl"
    : "text-gray-700 hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-100 cursor-pointer";

  return (
    <button
      className={`flex flex-col items-center justify-center p-2 flex-1 ${buttonClasses}`}
      onClick={onSelect}
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs mt-0.5">{item.label}</span>
    </button>
  );
};

export const SmallScreenNavBar = ({
  items,
  selectedValue,
  onSelect,
}: SmallScreenNavBarProps) => {
  return (
    <div className="bg-gray-400 dark:bg-gray-800 lg:hidden rounded-2xl">
      <nav className="flex justify-around">
        {items.map((item) => (
          <SmallScreenNavBarItem
            key={item.value}
            item={item}
            isSelected={item.value === selectedValue}
            onSelect={() => onSelect(item.value)}
          />
        ))}
      </nav>
    </div>
  );
};
