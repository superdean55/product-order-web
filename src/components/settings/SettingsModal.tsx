import Modal from "../../components/ui/Modal";
import Settings from "../settings/Settings";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Settings">
      <Settings />
    </Modal>
  );
}
