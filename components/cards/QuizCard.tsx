import { useEffect, useState } from 'react';
import * as Network from 'expo-network';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';
import { useTheme } from '../../hooks';

const QuizCard = ({ question }) => {

    const [quesIndex, setQuesIndex] = useState(0);
    const [quizData, setQuizData] = useState({});
    const [questionEnd, setQuestionEnd] = useState(false);
    const [userResponses, setUserResponses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { themeStyles } = useTheme();
    const { height } = Dimensions.get('screen');

    const handleOptionSelect = (selectedOption) => {
        const updatedResponses = [...userResponses];

        updatedResponses[quesIndex] = {
            question: quizData[quesIndex]?.question_text,
            answer: selectedOption
        };
        setUserResponses(updatedResponses);
        console.log('userResponses: ', userResponses)
        console.log('quesIndex: ', quesIndex)
    };

    const handleQuizSubmit = async () => {
        setIsLoading(true)

        try {
            const res = {
                registrationNumber: "2141011114",
                quizId: "12345678yrfdghj0",
                responses: userResponses,
            }
            // const networkStatus = (await Network.getNetworkStateAsync()).isInternetReachable;
            console.log('user res: ', res)
        } catch (error) {
            if (error.message === 'Request failed with status code 500') {
                Alert.alert('Error While Submiting quiz !!', 'Contact Co-ordinators');
            } else if (error.message === 'Request failed with status code 400') {
                Alert.alert('Quiz Already Submited', '', [
                    {
                        text: 'Ok',
                        onPress: () => navigation.navigate('Home')
                    }
                ]);
            } else if (error.message === 'Request failed with status code 404') {
                Alert.alert('Quiz Ended', '', [
                    {
                        text: 'Ok',
                        onPress: () => navigation.navigate('Home') // Navigate to home screen on OK press
                    }
                ]);
            } else {
                Alert.alert('Error Due to bad internet connection', '')
            }
            console.error('error while submiting quiz: ', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleQuestionChange = () => {
        if (question.length > quesIndex) {
            setQuesIndex(quesIndex + 1);
        }
        if (question.length - 2 === quesIndex) {
            setQuestionEnd(true);
        }
    };

    const handleQuestionFormate = () => {
        const res = JSON.parse(question.quizQuestions);
        setQuizData(res.quizData);
    }

    useEffect(() => { handleQuestionFormate() }, [])

    return (
        <View style={{ height: '100%', marginTop: 10 }}>
            <View style={{ height: 100, width: 100, backgroundColor: themeStyles["danger"], borderRadius: 100, marginHorizontal: 'auto', zIndex: 2, elevation: 5 }}>
                <Text style={{ margin: 'auto', color: 'white' }}>5/10</Text>
            </View>
            <View style={{ position: 'absolute', top: 50, height: '100%', width: '100%' }}>
                <View style={{ width: '90%', maxHeight: height * 0.3, minHeight: height * 0.2, backgroundColor: themeStyles["success"], marginHorizontal: 'auto', borderRadius: 20, paddingHorizontal: 16, paddingBottom: 12, paddingTop: 52, elevation: 4 }}>
                    <ScrollView>
                        <Text style={{ color: themeStyles["textColor_primary"] }}>
                            {quizData[quesIndex]?.question_text}
                        </Text>
                    </ScrollView>
                </View>
                <View style={styles.optionsContainer}>
                    <ScrollView>
                        {
                            Object.entries(quizData[quesIndex]?.options).map(([key, value]) => {
                                const isSelected = userResponses[quesIndex]?.answer === value;
                                return (
                                    <TouchableOpacity
                                        key={key}
                                        style={[
                                            styles.option,
                                            {
                                                backgroundColor: isSelected ? 'white' : themeStyles["backgroundColor_tertiary"]
                                            }
                                        ]}
                                        onPress={() => handleOptionSelect(value)}
                                    >
                                        <Text style={[
                                            styles.optionText,
                                            {
                                                color: isSelected ? 'black' : 'white'
                                            }
                                        ]}>
                                            {value}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                {
                    questionEnd ? (
                        <TouchableOpacity style={{ marginHorizontal: 'auto', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 20, elevation: 10, width: '83%', backgroundColor: themeStyles["textColor_secondary"] }} onPress={handleQuizSubmit}>
                            <Text style={{ color: themeStyles["backgroundColor_primary"], fontWeight: '500', margin: 'auto', fontSize: 18 }}>Submit</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={{ marginHorizontal: 'auto', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 20, elevation: 10, width: '83%', backgroundColor: themeStyles["textColor_secondary"] }} onPress={(handleQuestionChange)}>
                            <Text style={{ color: themeStyles["backgroundColor_primary"], fontWeight: '500', margin: 'auto', fontSize: 18 }}>Next</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    quizContainer: {
        width: '80%',
        maxHeight: '50%',
        marginVertical: 10,
        borderRadius: 20,
        padding: 8,
        paddingTop: 55,
        elevation: 4,
    },
    optionsContainer: {
        width: '85%',
        marginVertical: 20,
        marginHorizontal: 'auto',
    },
    option: {
        elevation: 4,
        backgroundColor: 'grey',
        maxHeight: 200,
        minHeight: 50,
        borderRadius: 15,
        marginVertical: 5,
        paddingHorizontal: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    optionText: {
        fontSize: 15,
        margin: 8,
        textAlign: 'left',
        color: 'white',
        marginVertical: 'auto',
    }
});

export default QuizCard