import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import { useTheme } from '../../../hooks';
import { HomeTopContainerStyles } from '@/styles/dashboard/HomeStylest';

const TopContainer = ({ userData }) => {

    const { themeStyles } = useTheme();
    const styles = HomeTopContainerStyles(themeStyles)

    // console.log('userData topbar: ', userData)

    return (
        <View style={styles.topContainer}>
            <View style={styles.width60}>
                <View style={styles.textContainer}>
                    <Text style={styles.heroText1}>Hello !! 👋🏻 </Text>
                    <Text style={styles.heroText2}>
                        {userData?.name ? userData.name : '......'}
                    </Text>
                    <Text style={styles.heroSubText}>Scan the QR to attend the quiz.</Text>
                </View>
            </View>
            <Image
                source='../../../assets/images/hero-imgs/signupHero.webp'
                style={styles.heroImg}
                contentFit='contain'
                transition={700}
            />
        </View>
    )
}

export default TopContainer