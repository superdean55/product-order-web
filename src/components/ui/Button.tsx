import { ButtonColor } from "../../constants/buttonColors";
import { BUTTON_STYLES } from "../../constants/buttonStyles";
import type { ButtonVariant } from "../../types/ui.types";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonColor?: ButtonVariant;
  children: React.ReactNode;
};

export default function Button({
  buttonColor = ButtonColor.regular,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const semanticClasses = BUTTON_STYLES[buttonColor];
  return (
    <button
      {...rest}
      className={`${semanticClasses} p-2 rounded-md cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
