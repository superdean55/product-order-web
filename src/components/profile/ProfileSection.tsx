import { Edit } from "lucide-react";
import { IconButton } from "../ui/IconButton";
import { Activity } from "react";

interface ProfileSectionProps {
  label: string;
  onEditClick?: () => void;
  children: React.ReactNode;
}
export const ProfileSection = ({
  label,
  onEditClick,
  children,
}: ProfileSectionProps) => {
  const isIconVisible = onEditClick !== undefined ? "visible" : "hidden";
  return (
    <>
      <div className="w-full flex flex-col gap-2 items-start">
        <div className="w-full flex flex-row justify-between items-center">
          <span
            className="
            text-[12px] font-medium uppercase tracking-wider
            text-gray-500 dark:text-gray-400
                  "
          >
            {label}
          </span>
          <Activity mode={isIconVisible}>
            <IconButton Icon={Edit} onClick={onEditClick} />
          </Activity>
        </div>
        {children}
      </div>
    </>
  );
};
