import { useState } from "react";
import { PROFILE_VIEWS, type AccountView } from "../../types/ui.types";
import { MainAccountScreen } from "../../components/profile/MainAccountScreen";
import { ChangePasswordForm } from "../../components/profile/accountSettings/ChangePasswordForm";
import { ChevronLeft } from "lucide-react";
import { useViewStackNavigation } from "../../hooks/view/useViewStackNavigation";
import { useTranslation } from "react-i18next";

export const ProfilePage = () => {
  const { activeView, Navigation } = useViewStackNavigation(
    "MAIN" as AccountView
  );
  const [isSettingsSectionOpen, setIsSettingsSectionOpen] = useState(false);
  const { t } = useTranslation();

  const translationKey = PROFILE_VIEWS[activeView as AccountView];

  const currentTitle = t(translationKey);

  const toggleSection = () => {
    setIsSettingsSectionOpen((prev) => !prev);
  };

  const renderContent = () => {
    switch (activeView) {
      case "MAIN":
        return (
          <MainAccountScreen
            onSelect={Navigation.push}
            isSettingsSectionOpen={isSettingsSectionOpen}
            toggleSection={toggleSection}
          />
        );
      case "CHANGE_PASSWORD":
        return <ChangePasswordForm onSuccess={Navigation.start}/>;
      case "DELETE_ACCOUNT":
        return <p>Delete Account logic goes here...</p>;

      default:
        return (
          <MainAccountScreen
            onSelect={Navigation.push}
            isSettingsSectionOpen={isSettingsSectionOpen}
            toggleSection={toggleSection}
          />
        );
    }
  };

  return (
    <div className="min-h-screen pt-20 flex flex-col items-center">
      <div className="w-full flex flex-col gap-4 max-w-xl p-8 bg-white dark:bg-gray-700 rounded-xl shadow-2xl text-center">
        {activeView !== "MAIN" && (
          <div className="w-full flex flex-row items-center">
            <button
              onClick={Navigation.back}
              className="p-2 bg-gray-300 dark:bg-gray-500 hover:bg-gray-600 dark:hover:bg-gray-400  rounded-full flex justify-center items-center cursor-pointer"
              aria-label="go Back"
              title="go Back"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <h2 className="w-full text-xl text-center font-bold">
              {currentTitle}
            </h2>
          </div>
        )}
        {renderContent()}
      </div>
    </div>
  );
};
