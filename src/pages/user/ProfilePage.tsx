import React from "react";
import { User } from "lucide-react";
import { useAuthStore } from "../../store/auth.store";
import { ProfileData } from "../../components/profile/ProfileData";
import Button from "../../components/ui/Button";
import { useLogoutMutation } from "../../hooks/queries/useAuthQuery";
import { useTranslation } from "react-i18next";

export const ProfilePage: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const { mutate, isPending } = useLogoutMutation();
  const { t } = useTranslation();

  if (!user) return null;

  const handleLogout = () => {
    mutate();
  };

  return (
    <div className="min-h-screen pt-20 flex justify-center items-start">
      <div className="w-full flex flex-col max-w-xl p-8 bg-white dark:bg-gray-700 rounded-xl shadow-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {t("profile.title")}
        </h1>
        <div className="w-full flex justify-center">
          <div className=" mb-6 w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-xl">
            {user.imageUrl ? (
              <img
                src={user.imageUrl}
                alt={`${user.username} profilna slika`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                <User className="w-16 h-16" />
              </div>
            )}
          </div>
        </div>
        <ProfileData user={user} />
        <div className="ml-auto pt-4">
          <Button
            className="bg-blue-500 dark:bg-gray-600 hover:bg-blue-700 dark:hover:bg-gray-500"
            onClick={handleLogout}
            disabled={isPending}
          >
            {isPending ? t("profile.actions.loggingOut") : t("profile.actions.logout")}
          </Button>
        </div>
      </div>
    </div>
  );
};
