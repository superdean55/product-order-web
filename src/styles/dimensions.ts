export const PaddingSize = {
  NONE: "NONE",
  XS: "XS",
  SM: "SM",
  MD: "MD",
  LG: "LG",
} as const;
export const PaddingSizeMap = {
  NONE: "",
  XS: "p-1",
  SM: "p-2",
  MD: "p-4",
  LG: "p-8",
} as const;
export type PaddingType = keyof typeof PaddingSize;

export const FontSize = {
  XS: "XS",
  SM: "SM",
  MD: "MD",
  LG: "LG",
} as const;
export const FontSizeClassMap = {
  XS: "text-[10px]",
  SM: "text-xs",
  MD: "text-sm",
  LG: "text-lg",
} as const;
export type FontSizeType = keyof typeof FontSize;

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
  XS: "w-4 h-4",
  SM: "w-5 h-5",
  MD: "w-6 h-6",
  LG: "w-8 h-8",
} as const;
export type IconSizeType = keyof typeof IconSize;

export const FocusRingSize = {
  XS: "XS",
  SM: "SM",
  MD: "MD",
  LG: "LG",
} as const;
export const FocusRingSizeMap = {
  XS: "focus:ring-1",
  SM: "focus:ring-2",
  MD: "focus:ring-3",
  LG: "focus:ring-4",
} as const;
export type FocusRingSizeType = keyof typeof FocusRingSize;
