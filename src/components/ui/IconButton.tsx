import type { LucideIcon } from "lucide-react";
import { ButtonColor } from "../../constants/buttonColors";
import Button from "./Button";
import { IconSize, IconSizeClassMap } from "../../styles/dimensions";
interface IconButtonProps {
  onClick?: () => void;
  Icon: LucideIcon;
}
export const IconButton = ({ onClick, Icon }: IconButtonProps) => {
  return (
    <Button onClick={onClick} buttonColor={ButtonColor.minimal}>
      <Icon className={`${IconSizeClassMap[IconSize.MD]}`}></Icon>
    </Button>
  );
};
