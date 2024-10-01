import { StyleSheet, Dimensions } from "react-native";
import { DefaultThemeType } from '@/constants/themes';

const { height } = Dimensions.get('window');

export const ProfileStyles = (themeStyles: DefaultThemeType) => StyleSheet.create({
    container: {
        backgroundColor: themeStyles["backgroundColor_primary"],
        height: '100%'
    },
    profile: {
        height: height * 0.14,
        width: '100%',
        backgroundColor: themeStyles["backgroundColor_secondary"],
        borderBottomRightRadius: 72,
        borderBottomLeftRadius: 72
    },
    contentContainer: {
        position: 'absolute',
        top: height * 0.05,
        width: '100%',
    }
});