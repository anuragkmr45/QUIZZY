import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const AuthFrameStyles = (themeStyles) => StyleSheet.create({
    container: {
        backgroundColor: themeStyles["backgroundColor_secondary"],
        height: height,
    },

    bottomContainer: {
        backgroundColor: themeStyles["backgroundColor_primary"],
        position: 'absolute',
        bottom: 0,
        // height: height * 0.75,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingTop: 10,
        paddingHorizontal: 20,
        width: width,
    },

    bar: {
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: 'center',
        width: '20%',
        borderColor: themeStyles["textColor_secondary"]
    },

    headerContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
    },

    headerText: {
        fontSize: 40,
        fontWeight: '400',
        marginBottom: 15,
        alignSelf: 'flex-start',
        color: themeStyles["textColor_primary"],
    },

    inputFields: {
        backgroundColor: 'inherit',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginVertical: 5,
        borderWidth: 2,
        borderColor: themeStyles["textColor_secondary"],
        fontSize: 16,
    },

    authButton: {
        elevation: 2,
        width: '60%',
        borderRadius: 20,
        padding: 10,
        backgroundColor: themeStyles["textColor_secondary"],
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    formChangeButton: {
        elevation: 2,
        backgroundColor: themeStyles["backgroundColor_primary"],
        width: width * 0.3,
        borderRadius: 10,
        padding: 10,
    },
    screenFooter: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 15,
        width: width,
    },
})
