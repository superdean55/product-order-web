import type { LucideIcon } from "lucide-react";
import { ButtonColor } from "../../constants/buttonColors";
import Button from "./Button";
interface IconButtonProps{
    onClick?: () => void;
    Icon: LucideIcon
}
export const IconButton = ({onClick, Icon}: IconButtonProps) => {
  return (
    <Button onClick={onClick} buttonColor={ButtonColor.minimal}>
      <Icon className="w-6 h-6"></Icon>
    </Button>
  );
};
