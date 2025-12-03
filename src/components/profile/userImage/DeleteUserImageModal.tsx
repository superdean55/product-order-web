import { useTranslation } from "react-i18next";
import Modal from "../../ui/Modal";

interface DeleteUserImageModalProp {
  isOpen: boolean;
  onAccept: () => void;
  onClose: () => void;
}

export const DeleteUserImageModal = ({
  isOpen,
  onAccept,
  onClose,
}: DeleteUserImageModalProp) => {
  const { t } = useTranslation();
  return (
    <>
      <Modal
        isOpen={isOpen}
        onAccept={onAccept}
        acceptButtonLabel={t(
          "profile.actions.image.remove.modalAccept"
        )}
        onClose={onClose}
        closeButtonLabel={t(
          "profile.actions.image.remove.modalClose"
        )}
        title={t("profile.actions.image.remove.modalTitle")}
      >
        <div className="w-full flex flex-col items-center">
          <p className="text-red-800">
            {t("profile.actions.image.remove.modalWarning")}
          </p>
        </div>
      </Modal>
    </>
  );
};
