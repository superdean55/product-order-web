import { LabeledDataItem } from "../../ui/LabeledDataItem";
import { useTranslation } from "react-i18next";
import { formatDate } from "../../../utils/formatDate";

export interface UserPersonalInfo {
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  dateOfBirth: string | null;
}

interface PersonalInfoDataProps {
  user: UserPersonalInfo;
}

export const PersonalInfoData = ({ user }: PersonalInfoDataProps) => {
  const { t } = useTranslation();

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
      <LabeledDataItem label={t("profile.firstName")} value={user.firstName} />
      <LabeledDataItem label={t("profile.lastName")} value={user.lastName} />
      <LabeledDataItem
        label={t("profile.phoneNumber")}
        value={user.phoneNumber}
      />
      <LabeledDataItem
        label={t("profile.dateOfBirth")}
        value={formatDate(user.dateOfBirth)}
      />
    </div>
  );
};
