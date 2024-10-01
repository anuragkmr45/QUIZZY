import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useTheme } from '@/hooks';

const Result = () => {

    const { themeStyles } = useTheme();
    const marksObtained = "10";
    const maxMarks = "10";
    const totalQuestions = "10";
    const totalCorrect = "10";
    const totalIncorrect = "10";

    const [paddingValue] = useState(new Animated.Value(35));

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(paddingValue, {
                    toValue: 15,
                    duration: 1000, // Adjust the duration as needed
                    useNativeDriver: false // Set useNativeDriver to false
                }),
                Animated.timing(paddingValue, {
                    toValue: 35,
                    duration: 1000, // Adjust the duration as needed
                    useNativeDriver: false // Set useNativeDriver to false
                })
            ])
        );

        animation.start(); // Start the animation

        return () => {
            animation.stop(); // Stop the animation when the component unmounts
        };
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: themeStyles["backgroundColor_primary"], height: '100%' }}>
            <StatusBar backgroundColor={themeStyles["success"]} animated={true} translucent={true} style='auto' />
            <View style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20, height: '60%', backgroundColor: themeStyles["success"], elevation: 6 }}>
                <View style={{ padding: 10 }}>
                    <TouchableOpacity style={{ alignItems: 'flex-end' }}>
                        <Link href='/(dashboard)/Home'>
                            <Entypo name="circle-with-cross" size={24} color={themeStyles["white"]} />
                        </Link>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Animated.View style={{ backgroundColor: 'rgba(217, 217, 217, 0.2)', padding: paddingValue, elevation: 0.1, borderRadius: 150 }}>
                        <View style={{ backgroundColor: 'rgba(217, 217, 217, 0.25)', padding: 25, borderRadius: 150 }}>
                            <View style={{ elevation: 4, backgroundColor: themeStyles["backgroundColor_primary"], paddingVertical: 20, paddingHorizontal: 35, borderRadius: 150 }}>
                                <Text style={{ color: themeStyles["textColor_secondary"] }}>Your Score</Text>
                                <Text style={{ fontSize: 60, color: themeStyles["textColor_primary"], textAlign: 'center' }}>{marksObtained}</Text>
                            </View>
                        </View>
                    </Animated.View>
                </View>
            </View>
            <View>
                <View style={{ position: 'relative', bottom: 60, backgroundColor: themeStyles["backgroundColor_primary"], paddingVertical: 20, borderRadius: 20, marginHorizontal: 20, elevation: 8 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ padding: 6, backgroundColor: themeStyles["textColor_primary"], borderRadius: 150, alignSelf: 'center', marginRight: 3 }} />
                                <Text style={{ color: themeStyles["textColor_primary"], fontSize: 20 }}>{maxMarks}</Text>
                            </View>
                            <Text style={{ color: themeStyles["textColor_secondary"], opacity: 0.6, fontSize: 10 }}>Max Marks</Text>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={{ padding: 6, backgroundColor: themeStyles["textColor_primary"], borderRadius: 150, alignSelf: 'center', marginRight: 3 }} />
                                <Text style={{ color: themeStyles["textColor_primary"], fontSize: 20 }}>{totalQuestions}</Text>
                            </View>
                            <Text style={{ color: themeStyles["textColor_secondary"], opacity: 0.6, fontSize: 10 }}>Total Questions</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
                        <View>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={{ padding: 6, backgroundColor: themeStyles["success"], borderRadius: 150, alignSelf: 'center', marginRight: 3 }} />
                                <Text style={{ color: themeStyles["success"], fontSize: 20 }}>{totalCorrect}</Text>
                            </View>
                            <Text style={{ color: themeStyles["textColor_secondary"], opacity: 0.6, fontSize: 10 }}>Correct Ans</Text>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ padding: 6, backgroundColor: themeStyles["danger"], borderRadius: 150, alignSelf: 'center', marginRight: 3 }} />
                                <Text style={{ color: themeStyles["danger"], fontSize: 20 }}>{totalIncorrect}</Text>
                            </View>
                            <Text style={{ color: themeStyles["textColor_secondary"], opacity: 0.6, fontSize: 10 }}>Wrong Ans</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ width: '80%', alignSelf: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: themeStyles["textColor_primary"], paddingVertical: 20, borderRadius: 10 }}>
                    <Text style={{ color: themeStyles["backgroundColor_primary"], textAlign: 'center', fontWeight: '600', elevation: 4, shadowColor: themeStyles["backgroundColor_primary"], fontSize: 18 }}>
                        See All Results
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Result