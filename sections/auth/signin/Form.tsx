import { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import { debounce } from 'rate-limiter-utils';

import { DefaultThemeType } from '@/constants/themes';
import { useAuthToken } from '@/hooks';
import { SignInFormStyles } from '@/styles/auth/SignInStyles';
import TextInputContainer from '../TextInputContainer';
import apiEndpoints from '@/services/api';

const Form = ({ themeStyles }: { themeStyles: DefaultThemeType }) => {

    const [registrationNumber, setRegNo] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPass, setIsShowPass] = useState(false);

    const { storeToken } = useAuthToken();

    const handleTogglePassVisibility = () => {
        setIsShowPass(!isShowPass);
    }

    const styles = SignInFormStyles(themeStyles);
    const handleFormSubmit = debounce(async () => {
        try {
            const androidId = 'fiorimwe4rdwsed430c'
            const res = await apiEndpoints.login({ registrationNumber, password, androidId });

            if (res.status === 200) {
                await storeToken(res.token);
                router.replace("/(dashboard)/Home")
            }

        } catch (error) {
            if (error instanceof Error) {
                console.error("Error while  Signin: ", error);
                throw new Error(error.message);
            } else {
                console.error("An unknown error occurred");
            }
        }
    }, 1000);

    return (
        <View>
            <TextInputContainer
                containerStyle={styles.inputFieldContainer}
                placeholder='Registration No.'
                placeholderTextColor={themeStyles["textColor_secondary"]}
                inputFieldStyle={styles.inputFields}
                cursorColor={themeStyles["textColor_primary"]}
                keyboardType='phone-pad'
                value={registrationNumber}
                onChangeEvent={setRegNo}
                autoComplete="off"
                autoCapitalize="none"
            />
            <View style={[styles.inputFieldContainer, { flexDirection: 'row', }]}>
                <TextInput
                    placeholder='Password'
                    placeholderTextColor={themeStyles["textColor_secondary"]}
                    style={[styles.inputFields, { width: '80%' }]}
                    keyboardType='name-phone-pad'
                    autoCorrect={false}
                    secureTextEntry={isShowPass ? false : true}
                    value={password}
                    onChangeText={(text) => { setPassword(text) }}
                    cursorColor={themeStyles["textColor_primary"]}
                    autoCapitalize='none'
                />
                <View style={{ width: '20%', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={handleTogglePassVisibility}>
                        {
                            isShowPass ? (
                                <Entypo name="eye-with-line" style={styles.alignSelfCenter} size={24} color={themeStyles["textColor_primary"]} />

                            ) : (
                                <Entypo name="eye" style={styles.alignSelfCenter} size={24} color={themeStyles["textColor_primary"]} />
                            )
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.authActionButton} onPress={handleFormSubmit}>
                <Text style={styles.authActionButtonText}>Sign In</Text>
                <Entypo name="login" size={24} color={themeStyles["backgroundColor_primary"]} />
            </TouchableOpacity>
        </View>
    )
}

export default Form