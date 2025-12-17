import { BackgroundColor, BackgroundColorMap } from "../../styles/colors";
import { PaddingSize, PaddingSizeMap } from "../../styles/dimensions";

export default function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className={`${BackgroundColorMap[BackgroundColor.CARD]} ${PaddingSizeMap[PaddingSize.LG]} rounded-lg shadow-md w-full max-w-md`}>
        {children}
      </div>
    </div>
  );
}
