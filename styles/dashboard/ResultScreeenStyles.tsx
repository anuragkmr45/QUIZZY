import { StyleSheet, Dimensions } from 'react-native';
import { DefaultThemeType } from '@/constants/themes';

const height = Dimensions.get('window').height;

export const ResultScreeenStyles = (themeStyles: DefaultThemeType) => StyleSheet.create({
    container: {
        paddingHorizontal: '2%',
        backgroundColor: themeStyles["backgroundColor_primary"],
        height: height,
    }
});

export const ResultScreeenCardStyles = (themeStyles: DefaultThemeType) => StyleSheet.create({
    container: {
        paddingHorizontal: '2%',
        backgroundColor: themeStyles["backgroundColor_primary"],
        height: height,
    },
    cardContainer: {
        backgroundColor: themeStyles["backgroundColor_tertiary"],
        width: '100%',
        padding: 10,
        borderRadius: 15,
        elevation: 3,
        shadowColor: themeStyles["backgroundColor_primary"],
    },
    title: {
        color: themeStyles["textColor_primary"],
        fontSize: 20,
        fontWeight: '500',
        marginVertical: 10
    },
    subtitleA: {
        color: themeStyles["textColor_primary"],
        opacity: 0.6,
        fontSize: 14,
        marginVertical: 2
    },
});