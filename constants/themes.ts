import { Colors } from './Colors';

export interface DefaultThemeType {
    backgroundColor_primary: string;
    backgroundColor_secondary: string;
    backgroundColor_tertiary: string;
    textColor_primary: string;
    textColor_secondary: string;
    danger: string;
    success: string;
    white: string;
}

export const DefaultTheme: Record<'light' | 'dark', DefaultThemeType> = {
    light: {
        backgroundColor_primary: Colors.light.background_primary,
        backgroundColor_secondary: Colors.light.background_secondary,
        backgroundColor_tertiary: Colors.light.background_tertiary,
        textColor_primary: Colors.light.text_primary,
        textColor_secondary: Colors.light.text_secondary,
        danger: Colors.danger,
        success: Colors.success,
        white: Colors.white,
    },
    dark: {
        backgroundColor_primary: Colors.dark.background_primary,
        backgroundColor_secondary: Colors.dark.background_secondary,
        backgroundColor_tertiary: Colors.dark.background_tertiary,
        textColor_primary: Colors.dark.text_primary,
        textColor_secondary: Colors.dark.text_secondary,
        danger: Colors.danger,
        success: Colors.success,
        white: Colors.white,
    },
};
