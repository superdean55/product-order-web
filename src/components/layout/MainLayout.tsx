import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SettingsSidebar from "../settings/SettingsSidebar";
import { useScreenSize } from "../../context/useScreenSize";
import { useSettings } from "../../context/useSettings";

export default function MainLayout() {
  const { isLargeScreen } = useScreenSize();
  const { isOpen } = useSettings();
  return (
    <div className="min-h-screen flex flex-row overflow-y-auto">
      <Navbar />
      <main className="px-6 flex-1 bg-gray-100 dark:bg-gray-800">
        <Outlet />
      </main>
      {isLargeScreen && isOpen && <SettingsSidebar />}
    </div>
  );
}
