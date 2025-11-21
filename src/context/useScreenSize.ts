import { useContext } from "react";
import { ScreenSizeContext } from "./ScreenSizeContext";

export const useScreenSize = () => {
  const context = useContext(ScreenSizeContext);
  if (!context)
    throw new Error("useScreenSize must be used within ScreenSizeProvider");
  return context;
};
