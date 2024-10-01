import { FC, useEffect } from 'react';
import { Stack, router } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTheme, useAuthToken } from '@/hooks';

const DashboardLayout: FC = () => {

    const { themeStyles } = useTheme();
    const { getToken } = useAuthToken();

    const headerOptions = {
        animation: "fade" as const,
        headerStyle: {
            backgroundColor: themeStyles["backgroundColor_tertiary"],
        },
        headerTintColor: themeStyles["textColor_primary"],

    };

    useEffect(() => {
        const handlegetToken = async () => {
            const authToken = await getToken();
            if (authToken === '') {
                router.replace('/Signin');
            }
        }

        handlegetToken();
    }, [])

    return (
        <SafeAreaProvider>
            <StatusBar animated={true} translucent={true} style='auto' />
            <Stack>
                <Stack.Screen
                    name="Home"
                    options={{
                        ...headerOptions,
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="quiz"
                    options={{
                        ...headerOptions,
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="results/index"
                    options={{
                        ...headerOptions,
                        title: 'Results'
                    }}
                />
                <Stack.Screen
                    name="creators/index"
                    options={{
                        ...headerOptions,
                        title: 'About Creators'
                    }}
                />
                <Stack.Screen
                    name="profile/index"
                    options={{
                        animation: 'fade',
                        headerStyle: {
                            backgroundColor: themeStyles["backgroundColor_secondary"],
                        },
                        headerTintColor: 'white',
                        title: 'Profile'
                    }}
                />
            </Stack>
        </SafeAreaProvider>
    )
}

export default DashboardLayout 