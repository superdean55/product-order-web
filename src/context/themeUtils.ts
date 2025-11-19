export type Theme = "light" | "dark";

export const getOSTheme = (): Theme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
