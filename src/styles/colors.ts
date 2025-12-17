export const BackgroundColorMap = {
  MAIN: "bg-gray-200 dark:bg-gray-800",
  CARD: "bg-white dark:bg-gray-700",
  CARD_DETAIL: "bg-gray-200 dark:bg-gray-800",

  PRIMARY: "bg-blue-500 dark:bg-blue-600",
  SUCCESS: "bg-green-500 dark:bg-green-600",
  ERROR: "bg-red-500 dark:bg-red-600",
  WARNING: "bg-yellow-500 dark:bg-yellow-600",

  TRANSPARENT: "bg-transparent",
} as const;
export const BackgroundColor = {
  MAIN: "MAIN",
  CARD: "CARD",
  CARD_DETAIL: "CARD_DETAIL",

  PRIMARY: "PRIMARY",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  WARNING: "WARNING",

  TRANSPARENT: "TRANSPARENT",
} as const;
export type BackgroundColorType = keyof typeof BackgroundColor;

export const TextColorMap = {
  MAIN: "text-gray-800 dark:text-gray-100",
  LABEL: "text-gray-500 dark:text-gray-400",
  TEXT: "text-gray-800 dark:text-gray-100",

  PRIMARY: "text-blue-600 dark:text-blue-400",
  SUCCESS: "text-green-600 dark:text-green-400",
  ERROR: "text-red-600 dark:text-red-400",
  WARNING: "text-yellow-600 dark:text-yellow-400",

  LINK: "text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300",
} as const;
export const TextColor = {
  MAIN: "MAIN",
  LABEL: "LABEL",
  TEXT: "TEXT",

  PRIMARY: "PRIMARY",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  WARNING: "WARNING",

  LINK: "LINK",
} as const;
export type TextColorType = keyof typeof TextColor;

export const FocusRingColor = {
  PRIMARY: "PRIMARY",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  WARNING: "WARNING",
} as const;
export const FocusRingColorMap = {
  PRIMARY: "focus:ring-blue-500 dark:focus:ring-white",
  SUCCESS: "focus:ring-green-600 dark:focus:ring-green-400",
  ERROR: "focus:ring-red-600 dark:focus:ring-red-400",
  WARNING: "focus:ring-yellow-600 dark:focus:ring-yellow-400",
} as const;
export type FocusRingColorType = keyof typeof FocusRingColor;

export const BorderColor = {
  MAIN: "MAIN",
  PRIMARY: "PRIMARY",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  WARNING: "WARNING",
} as const;
export const BorderColorMap = {
  MAIN: "border-gray-300 dark:border-gray-100",
  PRIMARY: "border-blue-600 dark:border-blue-400",
  SUCCESS: "border-green-600 dark:border-green-400",
  ERROR: "border-red-600 dark:border-red-400",
  WARNING: "border-yellow-600 dark:border-yellow-400",
} as const;
export type BorderColorType = keyof typeof BorderColor;
