import { useTranslation } from "react-i18next";
import { PersonalInfoData, type UserPersonalInfo } from "./PersonalInfoData";
import { ProfileSection } from "../ProfileSection";
import type { AccountView } from "../../../types/ui.types";

interface PersonalInfoProps {
  user: UserPersonalInfo;
  onSelect: (view: AccountView) => void;
}

export const PersonalInfo = ({ user, onSelect }: PersonalInfoProps) => {
  const { t } = useTranslation();

  const handleEdit = () => {
    onSelect("UPDATE_USER");
  };

  return (
    <>
      <ProfileSection
        label={t("profile.sections.personalInformation")}
        onEditClick={handleEdit}
      >
        <PersonalInfoData user={user} />
      </ProfileSection>
    </>
  );
};
