import { View, Text, TouchableOpacity, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { router } from 'expo-router';
import { Image } from 'expo-image';

import { HomeMidContainerStyles } from '@/styles/dashboard/HomeStylest';
import { useTheme } from '@/hooks';

const MidCoontainer = () => {

    const { themeStyles } = useTheme();
    const styles = HomeMidContainerStyles(themeStyles)

    const handleEnterLobby = async () => {
        try {
            const hasHardware = await LocalAuthentication.hasHardwareAsync();
            const isEnrolled = await LocalAuthentication.isEnrolledAsync();

            if (hasHardware && isEnrolled) {
                const result = await LocalAuthentication.authenticateAsync();

                if (result["success"]) {
                    router.navigate('quiz');
                }
                if (!result["success"]) {
                    Alert.alert('Biometrics Authentication Failed', 'Please Contact Admin')
                }
            }
            if (!hasHardware) {
                router.navigate('quiz');
            } if (!isEnrolled) {
                Alert.alert('No Biometric Enrolled', 'Please enroll your biometric to continue');
            }

        } catch (error) {
            console.error('Error while authenticatoin biometrics: ', error);
            throw error;
        }
    };

    const handleNavigate = (screen) => {
        router.navigate(screen)
    }

    const cardContent = [
        {
            onPressEvent: handleEnterLobby,
            imgSrc: '../../../assets/images/feature/scanQR.webp',
            title: 'Quiz Lobby',
        },
        {
            onPressEvent: () => handleNavigate('profile'),
            imgSrc: '../../../assets/images/feature/profile.webp',
            title: 'Profile',
        },
        {
            onPressEvent: () => handleNavigate('results'),
            imgSrc: '../../../assets/images/feature/results.webp',
            title: 'Results',
        },
        {
            onPressEvent: () => handleNavigate('creators'),
            imgSrc: '../../../assets/images/feature/creator.webp',
            title: 'Devlopers',
        },
    ];

    return (
        <View style={styles.midContainer}>
            <View style={styles.midSubContainer}>
                {cardContent && cardContent.map((data, index) => {
                    return (
                        <TouchableOpacity onPress={data.onPressEvent} style={styles.actionCard} key={index}>
                            <View style={styles.marginauto}>
                                <Image
                                    source={data.imgSrc}
                                    style={styles.actionCardImg}
                                    contentFit='contain'
                                    transition={700}
                                />
                                <Text style={styles.actionCardText}>{data.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}

export default MidCoontainer