import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { HomeBottomContainerStyles } from '@/styles/dashboard/HomeStylest';
import MidCoontainer from './MidCoontainer';
import { useTheme } from '@/hooks';

const BottomContainer = () => {

    const { themeStyles } = useTheme();

    const styles = HomeBottomContainerStyles(themeStyles);

    return (
        <View style={styles.bottomContainer}>
            <View style={styles.bar} />

            <MidCoontainer themeStyles={themeStyles} />

            <View style={styles.footer}>
                <Text style={styles.footerTextFirstHalf}>Develop By</Text>
                <Link href='https://www.brandladder.co.in/' style={styles.footerTextSecondHalf}>Brandladder Tech Pvt</Link>
            </View>
        </View>
    )
}

export default BottomContainer