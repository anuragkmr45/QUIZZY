import { useMemo, useEffect, useState, FC } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useCameraPermissions } from 'expo-camera';

import { useTheme, useAuthToken } from '@/hooks';
import { LandingScreenStyles } from '@/styles/LandingScreenStyles';

const LandingScreen: FC = () => {

    const [isAuth, setIsAuth] = useState<boolean>(false);

    const { getToken } = useAuthToken();
    const { themeStyles } = useTheme();
    const [permission, requestPermission] = useCameraPermissions();

    const styles = useMemo(() => LandingScreenStyles(themeStyles), [themeStyles]);
    const { height } = useMemo(() => Dimensions.get('screen'), []);

    useEffect(() => {
        if (!permission) {
            requestPermission();
        }
    }, [permission]);

    useEffect(() => {
        (async () => {
            const token = await getToken();
            if (token) {
                setIsAuth(true);
            }
        })();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' animated={true} translucent={true} />
            <Image
                style={{ height: height * 0.65 }}
                source={require('../assets/images/hero-imgs/heroimg.webp')}
                contentFit="cover"
                transition={700}
                cachePolicy='memory-disk'
            />
            <View style={styles.bottomContainer}>
                <View style={[styles.bar, { alignSelf: 'center' }]} />
                <Text
                    style={styles.titleText}
                >
                    Welcome
                </Text>
                {
                    isAuth ? (
                        <Text style={styles.subtitle}>
                            Continue with your registered account
                        </Text>
                    ) : (
                        <Text style={styles.subtitle}>
                            Procide and Sign up to registered yourself
                        </Text>
                    )
                }
                <View style={[styles.bar, { alignSelf: 'flex-start', marginTop: 10 }]} />


                <View style={styles.navbtnContainer}>
                    {
                        isAuth ? (
                            <Link href='/Home' replace >
                                <Ionicons
                                    name="chevron-forward-circle-sharp"
                                    size={60}
                                    color={themeStyles["textColor_secondary"]}
                                />
                            </Link>
                        ) : (
                            <Link href='/Signup' replace >
                                <Ionicons
                                    name="chevron-forward-circle-sharp"
                                    size={60}
                                    color={themeStyles["textColor_secondary"]}
                                />
                            </Link>
                        )
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LandingScreen;
