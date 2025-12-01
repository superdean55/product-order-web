import type { ButtonColor } from "../constants/buttonColors";
import type { PROFILE_VIEWS } from "../constants/profileViews";



export type AccountView = keyof typeof PROFILE_VIEWS;
export type ButtonVariant = typeof ButtonColor[keyof typeof ButtonColor];