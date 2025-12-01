import { useTranslation } from "react-i18next";
import Modal from "../../ui/Modal";

interface DeleteAccountModalProp {
  isOpen: boolean;
  onAccept: () => void;
  onClose: () => void;
}

export const DeleteAccountModal = ({isOpen, onAccept, onClose}: DeleteAccountModalProp) => {
    const {t} = useTranslation();
  return (
    <>
      <Modal isOpen={isOpen} onAccept={onAccept} acceptButtonLabel={t("profile.actions.settings.deleteAccount.modalAccept")} onClose={onClose} closeButtonLabel={t("profile.actions.settings.deleteAccount.modalClose")} title={t("profile.actions.settings.deleteAccount.modalTitle")}>
        <div className="w-full flex flex-col items-center">
            <p className="text-red-800">{t("profile.actions.settings.deleteAccount.modalWarning")}</p>
        </div>
      </Modal>
    </>
  );
};
