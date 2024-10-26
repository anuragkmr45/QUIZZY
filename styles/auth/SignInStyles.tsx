import { StyleSheet } from "react-native";
import { DefaultThemeType } from "@/constants/themes";

export const SignInStyles = (themeStyles: DefaultThemeType) => StyleSheet.create({
    bottomContainer: {
        marginTop: 10,
        width: '100%',
        marginVertical: 'auto',
    },
    authButton: {
        elevation: 2,
        width: '70%',
        borderRadius: 20,
        padding: 10,
        backgroundColor: themeStyles["backgroundColor_secondary"],
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    authButtonText: {
        color: themeStyles["textColor_primary"],
        fontSize: 20,
        alignItems: 'center',
        marginVertical: 'auto',
    },
    formChangeButton: {
        elevation: 4,
        backgroundColor: themeStyles["backgroundColor_primary"],
        width: '30%',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    marginVerticalAuto: {
        marginVertical: 'auto',
    },
    alignSelfCenter: {
        alignSelf: 'center',
    },
})

export const SignInFormStyles = (themeStyles: DefaultThemeType) => StyleSheet.create({
    inputFieldContainer: {
        marginVertical: 2,
    },
    inputFields: {
        backgroundColor: themeStyles["backgroundColor_primary"],
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginVertical: 5,
        elevation: 2,
        borderColor: themeStyles["textColor_secondary"],
        fontSize: 16,
        color: themeStyles["textColor_primary"],
        width: '100%',
    },
    alignSelfCenter: {
        alignSelf: 'center',
    },
    authActionButton: {
        width: '100%',
        elevation: 10,
        backgroundColor: themeStyles["textColor_primary"],
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 26,
    },

    authActionButtonText: {
        color: themeStyles["backgroundColor_primary"],
        textAlign: 'center',
        marginRight: 10,
        fontSize: 20,
    },
});