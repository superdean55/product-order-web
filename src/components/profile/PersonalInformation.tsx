import { useTranslation } from "react-i18next";
import { ProfileData, type UserProfileData } from "./ProfileData";
import { ProfileSection } from "./ProfileSection";
interface PersonalInformationProps{
    user: UserProfileData
}

export const PersonalInformation = ({user}: PersonalInformationProps) => {
  const { t } = useTranslation();
  const handleEdit = () => {};

  const dropdownMenuItems = [
    {
      label: "edit",
      action: handleEdit,
    },
  ];

  return (
    <>
      <ProfileSection
        label={t("profile.sections.personalInformation")}
        menuItems={dropdownMenuItems}
      >
        <ProfileData user={user} />
      </ProfileSection>
    </>
  );
};
