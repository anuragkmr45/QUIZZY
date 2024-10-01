import { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { CameraView } from 'expo-camera';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { setItem, deleteItemAsync } from 'expo-secure-store';

import apiEndpoints from '@/services/api';
import { useTheme, useAuthToken } from '@/hooks';
import { QuizLobbyStyles } from '@/styles/dashboard/QuizStyles';

const ScannQr = () => {

    const navigate = useRouter();
    const { getToken } = useAuthToken();
    const { themeStyles } = useTheme();

    const styles = QuizLobbyStyles(themeStyles);

    const [value, setValue] = useState(0);

    const handleGetQuizRoomData = async (data) => {

        try {
            // const networkStatus = await getNetworkStateAsync();
            // const netAccess = networkStatus.isInternetReachable;
            // if (netAccess) {
            const jsonData = JSON.parse(data.data);
            const authVerificationToken = await getToken();
            const currentDateTime = new Date().getTime() + 1;

            if (jsonData.expireDate > currentDateTime) {

                const res = await apiEndpoints.joinQuiz({
                    quizId: jsonData.id,
                    password: jsonData.pass,
                    authToken: authVerificationToken,
                })

                await deleteItemAsync('quizData');

                if (res.request.status === 200) {
                    const quizData = JSON.stringify({
                        quizid: res.data.quizID,
                        regno: res.data.registrationNumber,
                        quizQuestions: JSON.stringify(res.data.quizDetails),
                    })

                    setItem('quizData', quizData);

                    navigate.navigate('quiz/QuizRoom');

                }
            }
        } catch (error) {
            console.error('error : ', error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: themeStyles['danger'], fontWeight: '600', fontSize: 12, textAlign: 'center', width: '80%' }}>KEEP YOU DEVICE NETWORK CONNECTION OFF ONLY DURING THE EXAM</Text>

            <CameraView
                style={styles.cameerViewConatiner}
                facing='back'
                zoom={value}
                autofocus='on'
                animateShutter={true}
                barcodeScannerSettings={{
                    barcodeTypes: ['qr'],
                }}
                onBarcodeScanned={(data) => handleGetQuizRoomData(data)}
            >
                <Text>daoiedn</Text>
                <View style={styles.bottomContainer}>
                    <View style={styles.sliderContainer} >
                        <TouchableOpacity onPress={() => { setValue(value - 0.1) }}>
                            <AntDesign name="minuscircleo" size={24} color="white" />
                        </TouchableOpacity>
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={1}
                            step={0.01}
                            value={value}
                            onValueChange={(val) => setValue(val)}
                            minimumTrackTintColor={themeStyles["textColor_primary"]}
                            maximumTrackTintColor={themeStyles["textColor_secondary"]}
                            thumbTintColor={themeStyles["success"]}
                        />
                        <TouchableOpacity onPress={() => { setValue(value + 0.1) }}>
                            <AntDesign name="pluscircleo" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </CameraView >

        </View >
    )
}

export default ScannQr