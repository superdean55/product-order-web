export const Padding = {
  NONE: "NONE",
  XS: "XS",
  SM: "SM",
  MD: "MD",
  LG: "LG",
} as const;
export const PaddingClassMap = {
  NONE: "",
  XS: "p-1",
  SM: "p-2",
  MD: "p-4",
  LG: "p-8",
} as const;
export type PaddingType = keyof typeof Padding;

export const Gap = {
  NONE: "NONE",
  XS: "XS",
  SM: "SM",
  MD: "MD",
  LG: "LG",
} as const;
export const GapClassMap = {
  NONE: "",
  XS: "gap-1",
  SM: "gap-2",
  MD: "gap-4",
  LG: "gap-8",
} as const;
export type GapType = keyof typeof Gap;

export const IconSize = {
  NONE: "NONE",
  XS: "XS",
  SM: "SM",
  MD: "MD",
  LG: "LG",
} as const;
export const IconSizeClassMap = {
  XS: "w-3 h-3",
  SM: "w-4 h-4",
  MD: "w-5 h-5",
  LG: "w-8 h-8",
} as const;
export type IconSizeType = keyof typeof IconSize;
