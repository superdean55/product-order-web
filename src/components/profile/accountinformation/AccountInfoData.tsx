import { LabeledDataItem } from "../../ui/LabeledDataItem";
import { useTranslation } from "react-i18next";
import { formatDate } from "../../../utils/formatDate";

export interface UserAccountInfo {
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface AccountInfoDataProps {
  user: UserAccountInfo;
}

export const AccountInfoData = ({ user }: AccountInfoDataProps) => {
  const { t } = useTranslation();

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
      <LabeledDataItem label={t("profile.username")} value={user.username} />
      <LabeledDataItem label={t("profile.email")} value={user.email} />
      <LabeledDataItem
        label={t("profile.registredSince")}
        value={formatDate(user.createdAt)}
      />
      <LabeledDataItem
        label={t("profile.lastUpdated")}
        value={formatDate(user.updatedAt)}
      />
    </div>
  );
};
