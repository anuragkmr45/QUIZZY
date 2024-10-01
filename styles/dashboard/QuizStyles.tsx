import { StyleSheet, Dimensions } from 'react-native';
import { DefaultThemeType } from '@/constants/themes';

const { width } = Dimensions.get('screen');

export const QuizLobbyStyles = (themeStyles: DefaultThemeType) => StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: themeStyles["backgroundColor_primary"],
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameerViewConatiner: { height: '50%', width: width },
    bottomContainer: { position: 'absolute', width: '100%', bottom: 0, padding: 10 },
    sliderContainer: { flexDirection: 'row', justifyContent: "space-between" },
    slider: {
        width: '60%',
        marginHorizontal: 'auto',
    },
});

export const ResultScreeenCardStyles = (themeStyle: DefaultThemeType) => StyleSheet.create({

});