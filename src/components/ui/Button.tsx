import { ButtonColor } from "../../constants/buttonColors";
import { BUTTON_STYLES } from "../../constants/buttonStyles";
import { PaddingSize, PaddingSizeMap } from "../../styles/dimensions";
import type { ButtonVariant } from "../../types/ui.types";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonColor?: ButtonVariant;
  isSelected?: boolean;
  children: React.ReactNode;
};

export default function Button({
  buttonColor = ButtonColor.regular,
  isSelected = false,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const semanticClasses = BUTTON_STYLES[buttonColor];
  const isButtonDisabled = isSelected ? true : false;
  return (
    <button
      {...rest}
      className={`${semanticClasses} ${PaddingSizeMap[PaddingSize.SM]} rounded-md ${isSelected ? "" : "cursor-pointer"} ${className}`}
      disabled={isButtonDisabled}
    >
      {children}
    </button>
  );
}
