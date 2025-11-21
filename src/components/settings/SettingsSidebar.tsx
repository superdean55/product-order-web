import Settings from "../settings/Settings";

export default function SettingsSidebar() {
  return (
    <aside className="hidden md:block w-96 p-6 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
      <Settings />
    </aside>
  );
}
