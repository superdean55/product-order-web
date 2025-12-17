import type { LucideIcon } from "lucide-react";
import { BackgroundColor, BackgroundColorMap } from "../../styles/colors";
import { BUTTON_STYLES } from "../../constants/buttonStyles";
import { ButtonColor } from "../../constants/buttonColors";
import { FontSize, FontSizeClassMap, IconSize, IconSizeClassMap, PaddingSize, PaddingSizeMap } from "../../styles/dimensions";

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
    ? `${BUTTON_STYLES[ButtonColor.selected]} font-semibold rounded-2xl`
    : `${BUTTON_STYLES[ButtonColor.minimal]} cursor-pointer`;

  return (
    <button
      className={`flex flex-col items-center justify-center ${PaddingSizeMap[PaddingSize.SM]} flex-1 ${buttonClasses}`}
      onClick={onSelect}
    >
      <Icon className={IconSizeClassMap[IconSize.MD]} />
      <span className={`${FontSizeClassMap[FontSize.SM]} mt-0.5`}>{item.label}</span>
    </button>
  );
};

export const SmallScreenNavBar = ({
  items,
  selectedValue,
  onSelect,
}: SmallScreenNavBarProps) => {
  return (
    <div className={`${BackgroundColorMap[BackgroundColor.CARD_DETAIL]} lg:hidden rounded-2xl`}>
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
