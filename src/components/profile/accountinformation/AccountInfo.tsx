import { useTranslation } from "react-i18next";

import { ProfileSection } from "../ProfileSection";
import type { AccountView } from "../../../types/ui.types";
import { AccountInfoData, type UserAccountInfo } from "./AccountInfoData";

interface AccountInfoProps {
  user: UserAccountInfo;
  onSelect: (view: AccountView) => void;
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