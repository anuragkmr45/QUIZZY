import { StyleSheet, Dimensions } from "react-native";
import { DefaultThemeType } from '../../constants/themes';

const { width } = Dimensions.get('screen')

export const CreatorStyles = (themeStyles: DefaultThemeType) => StyleSheet.create({
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionHeaderText: {
        color: themeStyles["textColor_secondary"],
    },
    bar: {
        width: '20%',
        backgroundColor: themeStyles["textColor_secondary"],
        height: 3,
    },
});

export const CreatorCardStyles = (themeStyles: DefaultThemeType) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width,
        padding: 5,
        elevation: 3,
        shadowColor: themeStyles["textColor_primary"],
        backgroundColor: themeStyles["backgroundColor_tertiary"],
        borderRadius: 20,
        marginVertical: 15,
    },
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
        color: 'white'
    },
    heroText2: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 5,
        flexWrap: 'wrap'
    },
    heroSubText: {
        fontSize: 14,
        color: 'white',
        fontWeight: '400',
        flexWrap: 'wrap'
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
        shadowColor: 'black',
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