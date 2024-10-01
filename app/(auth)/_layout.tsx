import { FC, useEffect } from 'react';
import { Stack, router } from 'expo-router';
import { useAuthToken } from '@/hooks';

const AuthLayout: FC = () => {

    const { getToken } = useAuthToken();

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
        <Stack>
            <Stack.Screen
                name="Signin"
                options={{
                    headerShown: false,
                    animation: 'fade',
                    title: 'Sign In'
                }}
            />
            <Stack.Screen
                name="Signup"
                options={{
                    headerShown: false,
                    animation: 'fade',
                    title: 'Sign Up',
                }}
            />
        </Stack>
    )
}

export default AuthLayout