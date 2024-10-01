import { FC } from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '@/hooks';

const QuizLayout: FC = () => {

    const { themeStyles } = useTheme();

    const headerOptions = {
        animation: 'fade' as const,
        headerStyle: {
            backgroundColor: themeStyles["backgroundColor_tertiary"],
        },
        headerTintColor: themeStyles["textColor_primary"],
        headerShown: false,
    };

    return (
        <SafeAreaProvider>
            <StatusBar animated={true} translucent={true} style='auto' />
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{
                        ...headerOptions,
                    }}
                />

                <Stack.Screen
                    name="QuizRoom"
                    options={{
                        ...headerOptions,
                    }}
                />

                <Stack.Screen
                    name="Result"
                    options={{
                        ...headerOptions,
                    }}
                />
            </Stack>
        </SafeAreaProvider>
    )
}

export default QuizLayout