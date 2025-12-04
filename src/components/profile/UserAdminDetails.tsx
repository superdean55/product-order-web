import { LabeledDataItem } from "../ui/LabeledDataItem";
import { useTranslation } from "react-i18next";
import { ProfileSection } from "./ProfileSection";

interface UserAdminDetailsProps {
  user: {
    role: string;
    status: string;
  };
}

export const UserAdminDetails = ({ user }: UserAdminDetailsProps) => {
  const { t } = useTranslation();
  const handleEditClick = () => {};
  return (
    <ProfileSection label="User status" onEditClick={handleEditClick}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <LabeledDataItem label={t("profile.role")} value={user.role} />
        <LabeledDataItem
          label={t("profile.status")}
          value={t("profile.statusActive")}
          className="bg-green-100 dark:bg-green-800 border border-green-300 dark:border-green-600"
        />
      </div>
    </ProfileSection>
  );
};
