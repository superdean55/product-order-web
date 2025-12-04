import React from "react";
import { LabeledDataItem } from "../ui/LabeledDataItem";
import { useTranslation } from "react-i18next";

export interface UserProfileData {
  username: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  dateOfBirth: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface ProfileDataProps {
  user: UserProfileData;
}

export const ProfileData: React.FC<ProfileDataProps> = ({ user }) => {
  const { t } = useTranslation();

  const formatDate = (dateString: string | null) => {
    if (!dateString) {
      return "";
    }
    try {
      return new Date(dateString).toLocaleDateString("hr-HR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      return t("profile.invalidDate");
    }
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
      <LabeledDataItem label={t("profile.username")} value={user.username} />
      <LabeledDataItem label={t("profile.email")} value={user.email} />
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
