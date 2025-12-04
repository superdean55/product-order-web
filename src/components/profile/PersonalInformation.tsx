import { useTranslation } from "react-i18next";
import { ProfileData, type UserProfileData } from "./ProfileData";
import { ProfileSection } from "./ProfileSection";
import type { AccountView } from "../../types/ui.types";

interface PersonalInformationProps {
  user: UserProfileData;
  onSelect: (view: AccountView) => void;
}

export const PersonalInformation = ({
  user,
  onSelect,
}: PersonalInformationProps) => {
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
        <ProfileData user={user} />
      </ProfileSection>
    </>
  );
};
