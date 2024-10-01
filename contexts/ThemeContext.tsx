import { createContext, useState, useCallback, useEffect, ReactNode, FC } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { DefaultTheme, DefaultThemeType } from '../constants/themes';

interface ThemeContextType {
    theme: 'light' | 'dark';
    themeStyles: DefaultThemeType;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const colorScheme = useColorScheme() as 'light' | 'dark';
    const [theme, setTheme] = useState<'light' | 'dark'>(colorScheme || 'light');
    const [themeStyles, setThemeStyles] = useState<DefaultThemeType>(DefaultTheme[theme]);

    useEffect(() => {
        const loadTheme = async () => {
            const savedTheme = await AsyncStorage.getItem('theme');
            if (savedTheme === 'light' || savedTheme === 'dark') {
                setTheme(savedTheme);
                setThemeStyles(DefaultTheme[savedTheme]);
            } else {
                setTheme(colorScheme);
                setThemeStyles(DefaultTheme[colorScheme]);
            }
        };
        loadTheme();
    }, [colorScheme]);

    const toggleTheme = useCallback(async () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setThemeStyles(DefaultTheme[newTheme]);
        await AsyncStorage.setItem('theme', newTheme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, themeStyles, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
