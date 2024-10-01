import { StyleSheet } from "react-native";

export const SignUpFormStyles = (themeStyles) => StyleSheet.create({
    inputFieldContainer: {
        marginVertical: 2,
    },
    inputTitle: {
        color: themeStyles["textColor_secondary"],
        position: 'absolute',
        bottom: 40,
        marginLeft: 10,
        zIndex: 1,
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
    bar: {
        width: '100%',
        backgroundColor: themeStyles["textColor_secondary"],
        height: 1,
    },
    bottomContainer: {
        marginTop: 10,
        width: '100%',
        marginVertical: 'auto',
    },
    nextBtn: {
        elevation: 4,
        backgroundColor: themeStyles["backgroundColor_primary"],
        width: '30%',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nextBtnText: {
        color: themeStyles["textColor_primary"],
        fontSize: 18,
        fontWeight: 'semibold',
        marginVertical: 'auto',
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
    },

    authActionButtonText: {
        color: themeStyles["backgroundColor_primary"],
        textAlign: 'center',
        marginRight: 10,
        fontSize: 20,
    },
    colorWhite: {
        color: themeStyles["textColor_primary"],
    },
    marginBottom50: {
        marginBottom: 60,
    },
})