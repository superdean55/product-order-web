import { useTranslation } from "react-i18next";
import Modal from "../../components/ui/Modal";
import Settings from "../settings/Settings";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const {t} = useTranslation();
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeButtonLabel={t("settings.modalClose")} title="Settings">
      <Settings />
    </Modal>
  );
}
