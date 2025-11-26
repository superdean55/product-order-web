import React from "react";
import { useAuthStore } from "../../store/auth.store";
import { ProfileData } from "../../components/profile/ProfileData";
import Button from "../../components/ui/Button";
import { useLogoutMutation } from "../../hooks/queries/useAuthQuery";
import { useTranslation } from "react-i18next";
import { ProfileSection } from "../../components/profile/ProfileSection";
import { UserImage } from "../../components/profile/UserImage";

export const ProfilePage: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const { mutate, isPending } = useLogoutMutation();
  const { t } = useTranslation();

  if (!user) return null;

  const handleLogout = () => {
    mutate();
  };

  const imageClicked = () =>{

  }

  return (
    <div className="min-h-screen pt-20 flex justify-center items-start">
      <div className="w-full flex flex-col gap-4 max-w-xl p-8 bg-white dark:bg-gray-700 rounded-xl shadow-2xl text-center">
        <UserImage
          imageUrl={user.imageUrl}
          username={user.username}
          onImageEditClick={imageClicked}
        ></UserImage>

        <ProfileSection label={t("profile.sections.personalInformation")}>
          <ProfileData user={user} />
        </ProfileSection>

        <div className="ml-auto px-2">
          <Button
            className="bg-blue-500 dark:bg-gray-600 hover:bg-blue-700 dark:hover:bg-gray-500"
            onClick={handleLogout}
            disabled={isPending}
          >
            {isPending
              ? t("profile.actions.loggingOut")
              : t("profile.actions.logout")}
          </Button>
        </div>
      </div>
    </div>
  );
};
