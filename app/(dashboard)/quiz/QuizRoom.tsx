import { useEffect, useState } from 'react';
import { usePreventScreenCapture } from 'expo-screen-capture';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { getItem } from 'expo-secure-store';

import { useTheme } from '@/hooks';
import QuizCard from '@/components/cards/QuizCard';

const QuizScreen = () => {
    usePreventScreenCapture();

    const { themeStyles } = useTheme();
    const [quizData, setQuizData] = useState('');

    const handleGetQuizData = () => {
        const res = getItem('quizData')
        const data = JSON.parse(res);
        setQuizData(data);
    }

    useEffect(() => {
        handleGetQuizData();
    }, [])

    // console.log('quizData: ', quizData)

    return (
        <SafeAreaView>
            <StatusBar animated={true} translucent={true} style='auto' backgroundColor={themeStyles["backgroundColor_primary"]} />
            <View style={{ backgroundColor: themeStyles["backgroundColor_primary"], height: '100%' }}>
                <QuizCard question={quizData} />
            </View>
        </SafeAreaView>
    )
}

export default QuizScreen 