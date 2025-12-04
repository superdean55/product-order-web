import type { AccountView } from "../../types/ui.types";
import { SettingsMenu } from "./accountSettings/SettingsMenu";
import { PersonalInformation } from "./PersonalInformation";
import type { User } from "../../api/types/user";
import { UserImageUploader } from "./userImage/UserImageUploader";

interface MainAccountScreenProps {
  user: User;
  onSelect: (view: AccountView) => void;
}

export const MainAccountScreen = ({
  user,
  onSelect,
}: MainAccountScreenProps) => { 

  if (!user) return null;

  return (
    <div className="relative w-full flex flex-col gap-4">
      <div className="absolute top-0 right-0">
        <SettingsMenu onSelect={onSelect}></SettingsMenu>
      </div>
      <UserImageUploader user={user} />
      <PersonalInformation user={user} onSelect={onSelect} />
    </div>
  );
};
