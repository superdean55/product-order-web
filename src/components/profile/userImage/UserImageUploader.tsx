import React, { useRef, useState } from "react";
import type { User } from "../../../api/types/user";
import {
  useDeleteUserImageMutation,
  useUploadUserImageMutation,
} from "../../../hooks/queries/useUserImageQuery";
import { resizeImage } from "../../../utils/imageUtils";
import { UserImage } from "../UserImage";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { DeleteUserImageModal } from "./DeleteUserImageModal";

interface UserImageUploaderProps {
  user: User;
}

export const UserImageUploader = ({ user }: UserImageUploaderProps) => {
  const { mutateAsync: uploadUserImage, isPending: isUploading } =
    useUploadUserImageMutation();
  const { mutateAsync: deleteUserImage, isPending: isDeleting } =
    useDeleteUserImageMutation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const isProcessing = isUploading || isDeleting;

  const changeImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const removeImage = async () => {
    setIsModalOpen(false);
    if (!user.imageUrl) {
      toast.error(t("profile.actions.image.remove.imageNotExist"));
      return;
    }
    try {
      const res = await deleteUserImage();
      toast.success(res.message);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const message =
        err.response?.data?.message ||
        `${t("profile.actions.image.serverError")}`;
      toast.error(message);
    }
  };

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

        const res = await uploadUserImage(resizedFile);
        toast.success(res.message);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        const message =
          err.response?.data?.message ||
          `${t("profile.actions.image.serverError")}`;
        toast.error(message);
      }
    }
  };

  return (
    <>
      <UserImage
        imageUrl={user.imageUrl}
        username={user.username}
        onImageUpdateClick={changeImage}
        onImageRemoveClick={() => setIsModalOpen(true)}
        isImageLoading={isProcessing}
      />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />
      <DeleteUserImageModal
        isOpen={isModalOpen}
        onAccept={removeImage}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
