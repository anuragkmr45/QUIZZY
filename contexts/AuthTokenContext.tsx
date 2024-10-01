import { createContext, useEffect, FC, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthTokenContextType {
    storeToken: (token: string) => Promise<void>;
    getToken: () => Promise<string | null>;
    removeToken: () => Promise<void>;
}

export const AuthTokenContext = createContext<AuthTokenContextType | undefined>(undefined);

interface AuthTokenProviderProps {
    children: ReactNode;
}

export const AuthTokenProvider: FC<AuthTokenProviderProps> = ({ children }) => {

    const storeToken = async (token: string): Promise<void> => {
        try {
            await AsyncStorage.setItem('authToken', token);
        } catch (error) {
            console.error('Error storing token: ', error);
            throw error;
        }
    };

    const getToken = async (): Promise<string | null> => {
        try {
            const token = await AsyncStorage.getItem('authToken');
            return token;
        } catch (error) {
            console.error('Error getting token: ', error);
            throw error;
        }
    };

    const removeToken = async (): Promise<void> => {
        try {
            await AsyncStorage.removeItem('authToken');
        } catch (error) {
            console.error('Error removing token: ', error);
            throw error;
        }
    };

    useEffect(() => {
        getToken();
    }, [getToken]);

    return (
        <AuthTokenContext.Provider
            value={{
                storeToken,
                getToken,
                removeToken
            }}
        >
            {children}
        </AuthTokenContext.Provider>
    );
};
