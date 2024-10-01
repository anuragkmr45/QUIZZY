import { StyleSheet } from "react-native";
import { DefaultThemeType } from '@/constants/themes';

export const HomeStyles = (themeStyles: DefaultThemeType) => StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: themeStyles['backgroundColor_secondary'],
    },
    bottomContainer: {
        height: '76%',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 10,
        backgroundColor: themeStyles['backgroundColor_primary'],
        elevation: 10,
        shadowColor: themeStyles['backgroundColor_primary'],
    },
    bar: {
        width: '20%',
        backgroundColor: themeStyles["textColor_secondary"],
        height: 3,
        marginHorizontal: 'auto',
        marginTop: 10,
    },
    midContainer: {
        marginVertical: 'auto',
    },
    midSubContainer: {
        marginVertical: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: 'auto',
    },
    actionCard: {
        height: '40%',
        width: '48%',
        justifyContent: 'center',
        alignContent: 'center',
        marginVertical: '2%',
        borderRadius: 10,
        backgroundColor: themeStyles['backgroundColor_tertiary'],
        elevation: 1,
        shadowColor: themeStyles['backgroundColor_secondary'],
    },
    actionCardImg: {
        marginHorizontal: 'auto',
        height: 60,
        width: 60,
        borderRadius: 14,
    },
    actionCardText: {
        color: themeStyles["textColor_primary"],
        alignItems: 'center',
        margin: 'auto',
        paddingTop: 10,
        fontSize: 16,
        fontWeight: '500'
    },
    marginauto: {
        margin: 'auto',
    },
});

export const HomeTopContainerStyles = (themeStyles: DefaultThemeType) => StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    heroImg: {
        height: 180,
        marginHorizontal: 'auto',
        width: 180,
    },
    heroText1: {
        fontSize: 18,
        fontWeight: 'semibold',
        color: themeStyles["white"],
    },
    heroText2: {
        fontSize: 22,
        fontWeight: 'bold',
        color: themeStyles["white"],
        marginVertical: 5,
        flexWrap: 'wrap'
    },
    heroSubText: {
        fontSize: 12,
        color: themeStyles["white"],
        fontWeight: '400',
        flexWrap: 'wrap'
    },
    textContainer: {
        marginVertical: 'auto',
        width: '100%'
    },
    width60: {
        width: '60%'
    },
});

export const HomeMidContainerStyles = (themeStyles: DefaultThemeType) => StyleSheet.create({
    midContainer: {
        marginVertical: 'auto',
    },
    midSubContainer: {
        marginVertical: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: 'auto',
    },
    actionCard: {
        height: '40%',
        width: '48%',
        justifyContent: 'center',
        alignContent: 'center',
        marginVertical: '2%',
        borderRadius: 10,
        backgroundColor: themeStyles['backgroundColor_tertiary'],
        elevation: 1,
        shadowColor: themeStyles["backgroundColor_secondary"],
    },
    actionCardImg: {
        marginHorizontal: 'auto',
        height: 60,
        width: 60,
        borderRadius: 14,
    },
    actionCardText: {
        color: themeStyles["textColor_primary"],
        alignItems: 'center',
        margin: 'auto',
        paddingTop: 10,
        fontSize: 16,
        fontWeight: '500'
    },
    marginauto: {
        margin: 'auto',
    },
});

export const HomeBottomContainerStyles = (themeStyles: DefaultThemeType) => StyleSheet.create({
    bottomContainer: {
        height: '76%',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 10,
        // backgroundColor: 'black',
        backgroundColor: themeStyles['backgroundColor_primary'],
        elevation: 10,
        shadowColor: themeStyles['backgroundColor_primary'],
    },
    bar: {
        width: '20%',
        backgroundColor: themeStyles["textColor_secondary"],
        height: 3,
        marginHorizontal: 'auto',
        marginTop: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footerTextFirstHalf: {
        color: themeStyles["textColor_primary"],
        marginRight: 5,
    },
    footerTextSecondHalf: {
        color: themeStyles["backgroundColor_secondary"],
    },
});
