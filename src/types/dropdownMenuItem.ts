import type { LucideIcon } from "lucide-react";

export type DropdownMenuItem = {
  label: string;
  icon?: LucideIcon;
  action: () => void;
};
