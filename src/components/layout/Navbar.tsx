import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../ui/Modal";
import { Settings } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggleSlider";

export default function Navbar() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full bg-gray-500 dark:bg-gray-900 text-white dark:text-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          ProductOrder
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login" className="hover:text-blue-400 dark:hover:text-gray-400">Login</Link>
          <Link to="/register" className=" hover:text-blue-400 dark:hover:text-gray-400">Register</Link>

          <button onClick={() => setSettingsOpen(true)}>
            <Settings className="w-6 h-6 hover:text-blue-400 dark:hover:text-gray-400" />
          </button>
        </div>
      </nav>
      <Modal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        title="Settings"
      >
        <ThemeToggle />
      </Modal>
    </>
  );
}
