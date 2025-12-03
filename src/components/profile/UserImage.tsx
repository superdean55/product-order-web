import { ImageMinus, ImagePlus, Pencil, User } from "lucide-react";
import { FloatingActionButton } from "./FloatingActionButton";
import { FLOATING_POSITION } from "../../constants/floatingButtonPosition";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface UserImageProps {
  imageUrl: string | null;
  username: string;
  onImageEditClick?: () => void;
  onImageRemoveClick?: () => void;
}

export const UserImage = ({
  imageUrl,
  username,
  onImageEditClick,
  onImageRemoveClick
}: UserImageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-center">
      <div
        className="relative w-32 h-32 sm:w-[250px] sm:h-[250px] rounded-3xl overflow-hidden  shadow-xl"
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${username} ${t("profile.actions.image.altProfileImage")}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300">
            <User className="w-16 h-16" />
          </div>
        )}
        {isHovered && onImageEditClick && !imageUrl && (
          <FloatingActionButton
            onClick={onImageEditClick}
            Icon={ImagePlus}
            title={t("profile.actions.image.add.title")}
            position={FLOATING_POSITION.BOTTOM_RIGHT}
          />
        )}
        {isHovered && onImageEditClick && imageUrl && (
          <FloatingActionButton
            onClick={onImageEditClick}
            Icon={Pencil}
            title={t("profile.actions.image.edit.title")}
            position={FLOATING_POSITION.BOTTOM_RIGHT}
          />
        )}
        {isHovered && onImageRemoveClick && imageUrl && (
          <FloatingActionButton
            onClick={onImageRemoveClick}
            Icon={ImageMinus}
            title={t("profile.actions.image.remove.title")}
            position={FLOATING_POSITION.TOP_RIGHT}
          />
        )}
      </div>
    </div>
  );
};
