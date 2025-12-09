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
  LABELS: "text-gray-500 dark:text-gray-400",

  PRIMARY: "text-blue-600 dark:text-blue-400",
  SUCCESS: "text-green-600 dark:text-green-400",
  ERROR: "text-red-600 dark:text-red-400",
  WARNING: "text-yellow-600 dark:text-yellow-400",

  LINK: "text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300",
} as const;
export const TextColor = {
  MAIN: "MAIN",
  LABELS: "LABELS",
  
  PRIMARY: "PRIMARY",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  WARNING: "WARNING",

  LINK: "LINK",
} as const;
export type TextColorType = keyof typeof TextColor;
