export const PROFILE_VIEWS = {
    MAIN: 'profile.viewTitles.main', 
    CHANGE_PASSWORD: 'profile.viewTitles.changePassword',
    DELETE_ACCOUNT: 'profile.viewTitles.deleteAccount',
} as const;

export type AccountView = keyof typeof PROFILE_VIEWS;