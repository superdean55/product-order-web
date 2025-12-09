import { Settings, type LucideIcon, BookUser } from "lucide-react";
import { Activity, useState } from "react";
import { SmallScreenNavBar } from "../ui/SmallScreenNavBar";
import type { User } from "../../api/types/user";
import { PersonalInfo } from "./personalIformation/PersonalInfo";
import type { AccountView } from "../../types/ui.types";
import { AccountInfo } from "./accountInformation/AccountInfo";

export const SmallScreenAccountViews = {
  PERSONAL_INFO: "personal_info",
  ACCOUNT_INFO: "account_info",
} as const;

interface NavItem {
  value: SmallScreenAccountValues;
  icon: LucideIcon;
  label: string;
}

type SmallScreenAccountValues =
  (typeof SmallScreenAccountViews)[keyof typeof SmallScreenAccountViews];

interface SmallScreenAccountNavigationProps {
  user: User;
  onSelect: (view: AccountView) => void;
}
export const SmallScreenAccountNavigation = ({
  user,
  onSelect,
}: SmallScreenAccountNavigationProps) => {
  const [activeView, setActiveView] = useState<SmallScreenAccountValues>(
    SmallScreenAccountViews.PERSONAL_INFO
  );

  const navItems: NavItem[] = [
    {
      value: SmallScreenAccountViews.PERSONAL_INFO,
      icon: BookUser,
      label: "Personal info",
    },
    {
      value: SmallScreenAccountViews.ACCOUNT_INFO,
      icon: Settings,
      label: "Account Info",
    },
  ];
  const isPersonalInfoVisible =
    activeView === SmallScreenAccountViews.PERSONAL_INFO ? "visible" : "hidden";

  const isAccountInfoVisible =
    activeView === SmallScreenAccountViews.ACCOUNT_INFO ? "visible" : "hidden";
  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <SmallScreenNavBar
          items={navItems}
          selectedValue={activeView}
          onSelect={(view) => setActiveView(view as SmallScreenAccountValues)}
        />
        <Activity mode={isPersonalInfoVisible}>
          <PersonalInfo user={user} onSelect={onSelect} />
        </Activity>
        <Activity mode={isAccountInfoVisible}>
          <AccountInfo user={user} />
        </Activity>
      </div>
    </>
  );
};
