import type { AccountView } from "../../types/ui.types";
import { SettingsMenu } from "./accountSettings/SettingsMenu";
import { PersonalInfo } from "./personalIformation/PersonalInfo";
import type { User } from "../../api/types/user";
import { UserImageUploader } from "./userImage/UserImageUploader";
import { AccountInfo } from "./accountinformation/AccountInfo";
import { useScreenSize } from "../../context/useScreenSize";
import { SmallScreenAccountNavigation } from "./ SmallScreenAccountNavigation";

interface MainAccountScreenProps {
  user: User;
  onSelect: (view: AccountView) => void;
}

export const MainAccountScreen = ({
  user,
  onSelect,
}: MainAccountScreenProps) => {
  const { isLargeScreen } = useScreenSize();
  if (!user) return null;

  return (
    <div className="relative w-full">
      <div className="absolute top-0 right-0">
        <SettingsMenu onSelect={onSelect} />
      </div>

      {isLargeScreen ? (
        <div className="grid grid-cols-2 gap-4">
          <PersonalInfo user={user} onSelect={onSelect} />
          <UserImageUploader user={user} />
          <AccountInfo user={user} />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <UserImageUploader user={user} />
          <SmallScreenAccountNavigation user={user} onSelect={onSelect} />
        </div>
      )}
    </div>
  );
};
