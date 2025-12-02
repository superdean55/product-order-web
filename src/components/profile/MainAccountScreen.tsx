import React, { useRef} from "react";
import { useAuthStore } from "../../store/auth.store";
import { ProfileData } from "../../components/profile/ProfileData";
import Button from "../../components/ui/Button";
import { useLogoutMutation } from "../../hooks/queries/useAuthQuery";
import { useTranslation } from "react-i18next";
import { ProfileSection } from "../../components/profile/ProfileSection";
import { UserImage } from "../../components/profile/UserImage";
import { resizeImage } from "../../utils/imageUtils";
import { useUploadUserImageMutation } from "../../hooks/queries/useUserImageQuery";
import type { AccountView } from "../../types/ui.types";
import { SettingsMenu } from "./accountSettings/SettingsMenu";
import { KebabMenu } from "../ui/KebabMenu";
interface MainAccountScreenProps {
  onSelect: (view: AccountView) => void;
  isSettingsSectionOpen: boolean;
  toggleSection: () => void;
}

export const MainAccountScreen = ({
  onSelect,
  isSettingsSectionOpen,
  toggleSection,
}: MainAccountScreenProps) => {
  const user = useAuthStore((state) => state.user);
  const { mutate: logoutMutate, isPending: isLoggingOut } = useLogoutMutation();
  const { mutate: uploadMutate } = useUploadUserImageMutation();
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  

  if (!user) return null;

  const handleEdit = () => {
    
  };

  const kebabMenuItems = [
    {
      label: "edit",
      action: handleEdit,
    },
  ];
  const optionMenu = (
    <KebabMenu
      items={kebabMenuItems} 
    />
  );
  const handleLogout = () => {
    logoutMutate();
  };

  const changeImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const removeImage = () => {};

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const originalFile = event.target.files?.[0];

    if (originalFile) {
      try {
        const resizedBlob = await resizeImage(originalFile, 500, 500);

        const resizedFile = new File([resizedBlob], originalFile.name, {
          type: resizedBlob.type,
          lastModified: Date.now(),
        });

        uploadMutate(resizedFile);
      } catch (error) {
        console.error("Image processing error:", error);
      }
    }
  };
  return (
    <div className="w-full flex flex-col gap-4">
      <UserImage
        imageUrl={user.imageUrl}
        username={user.username}
        onImageEditClick={changeImage}
        onImageRemoveClick={removeImage}
      ></UserImage>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />
      <ProfileSection label={t("profile.sections.personalInformation")} optionMenu={optionMenu}>
        <ProfileData user={user} />
      </ProfileSection>
      <ProfileSection
        label={t("profile.sections.accountSettings")}
        isSectionOpen={isSettingsSectionOpen}
        toggleIsSectionOpen={toggleSection}
      >
        <SettingsMenu onSelect={onSelect} />
      </ProfileSection>
      <div className="ml-auto px-2">
        <Button
          className="bg-blue-500 dark:bg-gray-600 hover:bg-blue-700 dark:hover:bg-gray-500"
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          {isLoggingOut
            ? t("profile.actions.loggingOut")
            : t("profile.actions.logout")}
        </Button>
      </div>
    </div>
  );
};
