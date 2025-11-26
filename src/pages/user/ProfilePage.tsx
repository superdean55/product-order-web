import React, { useRef } from "react";
import { useAuthStore } from "../../store/auth.store";
import { ProfileData } from "../../components/profile/ProfileData";
import Button from "../../components/ui/Button";
import { useLogoutMutation } from "../../hooks/queries/useAuthQuery";
import { useTranslation } from "react-i18next";
import { ProfileSection } from "../../components/profile/ProfileSection";
import { UserImage } from "../../components/profile/UserImage";
import { resizeImage } from "../../utils/imageUtils";

export const ProfilePage: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const { mutate, isPending } = useLogoutMutation();
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!user) return null;

  const handleLogout = () => {
    mutate();
  };

  const changeImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const removeImage = () => {};

  const handleFileChange = async(event: React.ChangeEvent<HTMLInputElement>) => {
    const originalFile = event.target.files?.[0];
    if (originalFile) {
      try {
        const resizedBlob = await resizeImage(originalFile, 500, 500);

        const resizedFile = new File(
          [resizedBlob], 
          originalFile.name, 
          { 
            type: resizedBlob.type, 
            lastModified: Date.now() 
          }
        );
        console.log("Original size (B):", originalFile.size);
        console.log("Reduced size (B):", resizedBlob.size);
      } catch (error) {
        console.error("Image processing error:", error);
  
      }
    }
  };
  return (
    <div className="min-h-screen pt-20 flex justify-center items-start">
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />
      <div className="w-full flex flex-col gap-4 max-w-xl p-8 bg-white dark:bg-gray-700 rounded-xl shadow-2xl text-center">
        <UserImage
          imageUrl={user.imageUrl}
          username={user.username}
          onImageEditClick={changeImage}
          onImageRemoveClick={removeImage}
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
