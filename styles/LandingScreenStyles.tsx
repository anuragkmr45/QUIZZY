import { StyleSheet, Dimensions } from "react-native";
import { DefaultThemeType } from '@/constants/themes';

const { height } = Dimensions.get('screen');

export const LandingScreenStyles = (themeStyles: DefaultThemeType) => StyleSheet.create({
    container: {
        backgroundColor: themeStyles["backgroundColor_secondary"],
        flex: 1
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: height * 0.27,
        backgroundColor: themeStyles["backgroundColor_primary"],
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    bar: {
        width: 50,
        height: 5,
        backgroundColor: themeStyles["textColor_secondary"],
        borderRadius: 5,
        marginBottom: 10
    },
    titleText: {
        fontSize: 30,
        color: themeStyles["textColor_primary"],
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,
        color: themeStyles["textColor_secondary"],
        marginTop: 10
    },
    navbtnContainer: {
        alignSelf: 'flex-end',
    },
});