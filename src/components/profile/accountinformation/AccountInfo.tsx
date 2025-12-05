import { useTranslation } from "react-i18next";
import { ProfileSection } from "../ProfileSection";
import { AccountInfoData, type UserAccountInfo } from "./AccountInfoData";

interface AccountInfoProps {
  user: UserAccountInfo;
}

export const AccountInfo = ({ user }: AccountInfoProps) => {

  const { t } = useTranslation();

  return (
    <>
      <ProfileSection
        label={t("profile.sections.accountInformation")}
      >
        <AccountInfoData user={user} />
      </ProfileSection>
    </>
  );
};