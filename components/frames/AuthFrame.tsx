import { useEffect, useMemo, ReactNode, FC } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme, useAuthToken } from '@/hooks';
import { AuthFrameStyles } from '@/styles/auth';

interface AuthFrameProps {
    children: ReactNode;
    img: string;
    pageTitle: string;
    bottomContainerHeight: number;
}

const AuthFrame: FC<AuthFrameProps> = ({ children, img, pageTitle, bottomContainerHeight }) => {

    const { themeStyles } = useTheme();
    const { getToken } = useAuthToken();
    const styles = useMemo(() => AuthFrameStyles(themeStyles), [themeStyles]);

    useEffect(() => {

        const handleCheckAuth = async () => {
            const authToken: string | null = await getToken();
            if (authToken !== null) {
                router.replace('/(dashboard)/Home');
            }
        }

        handleCheckAuth();

    }, [])

    return (
        <SafeAreaView>
            <StatusBar
                style='inverted'
                translucent={true}
                animated={true}
                backgroundColor={themeStyles["backgroundColor_primary"]} />
            <View style={styles.container}>
                <Image
                    source={img}
                    style={{ height: 240, marginHorizontal: 'auto', width: 240 }}
                    contentFit='contain'
                    transition={700}
                />
                <View style={[styles.bottomContainer, { height: bottomContainerHeight }]}>
                    <View style={styles.bar} />

                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>{pageTitle}</Text>
                    </View>
                    {children}
                    <View style={styles.screenFooter}>
                        {
                            pageTitle && pageTitle === 'Sign Up' ? (
                                <View style={{display: "flex", flexDirection: 'row' }}>
                                    <Text style={{ color: themeStyles["textColor_primary"] }}>Already having an account?</Text>
                                    <Link href='/(auth)/Signin' style={{ marginLeft: 8 }}>
                                        <Text style={{ color: themeStyles["backgroundColor_secondary"] }}>Sign In</Text>
                                    </Link>
                                </View>
                            ) : (
                                <View style={{display: "flex", flexDirection: 'row' }}>
                                    <Text style={{ color: themeStyles["textColor_primary"] }}>Don't have an account?</Text>
                                    <Link href='/(auth)/Signup' style={{ marginLeft: 8 }}>
                                        <Text style={{ color: themeStyles["backgroundColor_secondary"] }}>Sign Up</Text>
                                    </Link>
                                </View>
                            )
                        }

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}



export default AuthFrame
