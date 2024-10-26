import { useState, useMemo} from 'react';
import { View, TextInput, TouchableOpacity, ScrollView, Text, ToastAndroid } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { Link, router } from 'expo-router';
import { debounce } from 'rate-limiter-utils';
import { Picker } from '@react-native-picker/picker';

import { courseOptions } from '@/assets/.data/course';
import { branchOptions } from '@/assets/.data/branch';
import { batchOptions } from '@/assets/.data/batch';
import { sectionOptions } from '@/assets/.data/section';
import { SignUpFormStyles } from '@/styles/auth/SignUpStyles';

import { DefaultThemeType } from '@/constants/themes';
import apiEndpoints from '@/services/api';

const Form = ({ themeStyles }: { themeStyles: DefaultThemeType }) => {

    const [formData, setFormData] = useState({
        name: '',
        registrationNumber: '',
        email: '',
        password: '',
        batch: '',
        branch: '',
        section: '',
        course: '',
        androidId: 'fiorimwe4rdwsed430c'
    })
    const [isShowPass, setIsShowPass] = useState(false);
    const [isChecked, setChecked] = useState(false);

    const styles = useMemo(() => SignUpFormStyles(themeStyles), [themeStyles]);

    const handleFormSubmit = debounce(async () => {

        const isFormValid = true;

        if (!isChecked) {
            ToastAndroid.show('Please agree to terms and conditions', ToastAndroid.SHORT);
            return;
        }
        if (!isFormValid) {
            ToastAndroid.show('ALL DETAILS ARE REQUIRED !! ', ToastAndroid.SHORT);
            return;
        }
        try {
            if (isFormValid) {
                const res: any = await apiEndpoints.register(formData);

                if (res.status === 201) {

                    ToastAndroid.show('Registration successful', ToastAndroid.SHORT);
                    router.navigate('/Signin');
                    return;
                }
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error while  Signup: ", error);
                throw new Error('Error while submiting form: ', error);
            } else {
                console.error("An unknown error occurred");
            }
        }
    }, 1000, true);


    return (
        <ScrollView style={styles.marginBottom50}>
            <View style={styles.marginBottom50}>
                <View>
                    <View style={styles.inputFieldContainer}>
                        <TextInput
                            placeholder="Name"
                            placeholderTextColor={themeStyles["textColor_secondary"]}
                            style={styles.inputFields}
                            keyboardType="name-phone-pad"
                            value={formData.name}
                            onChangeText={(text) => setFormData({ ...formData, name: text })}
                            cursorColor={themeStyles["textColor_primary"]}
                        />
                    </View>
                    <View style={styles.inputFieldContainer}>
                        <TextInput
                            placeholder="Registration Number"
                            placeholderTextColor={themeStyles["textColor_secondary"]}
                            style={styles.inputFields}
                            keyboardType="number-pad"
                            value={formData.registrationNumber}
                            onChangeText={(text) => setFormData({ ...formData, registrationNumber: text })}
                            cursorColor={themeStyles["textColor_primary"]}
                        />
                    </View>
                    <View style={styles.inputFieldContainer}>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor={themeStyles["textColor_secondary"]}
                            style={styles.inputFields}
                            keyboardType="email-address"
                            value={formData.email}
                            onChangeText={(text) => setFormData({ ...formData, email: text })}
                            cursorColor={themeStyles["textColor_primary"]}
                        />
                    </View>
                    <View style={[styles.inputFieldContainer, { flexDirection: 'row', }]}>
                        <TextInput
                            placeholder='Password'
                            placeholderTextColor={themeStyles["textColor_secondary"]}
                            style={[styles.inputFields, { width: '80%' }]}
                            keyboardType='visible-password'
                            autoCorrect={false}
                            secureTextEntry={isShowPass ? false : true}
                            value={formData.password}
                            onChangeText={(text) => { setFormData({ ...formData, password: text }) }}
                            cursorColor={themeStyles["textColor_primary"]}
                            autoCapitalize='none'
                        />
                        <View style={{ width: '20%', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => { setIsShowPass(!isShowPass) }}>
                                {
                                    isShowPass ? (
                                        <Entypo name="eye-with-line" style={{ alignSelf: 'center' }} size={24} color={themeStyles["textColor_primary"]} />

                                    ) : (
                                        <Entypo name="eye" style={{ alignSelf: 'center' }} size={24} color={themeStyles["textColor_primary"]} />
                                    )
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <Picker
                        selectedValue={formData.course}
                        onValueChange={(itemValue) => setFormData({ ...formData, course: itemValue })}
                        style={{ color: formData.course ? themeStyles["textColor_primary"] : themeStyles["textColor_secondary"] }}
                    >
                        <Picker.Item label="Select Course" value="" color='black' />
                        {courseOptions.map((option, index) => (
                            <Picker.Item key={index} label={option} value={option} />
                        ))}
                    </Picker>
                    <View style={styles.bar} />

                    <Picker
                        selectedValue={formData.branch}
                        onValueChange={(itemValue) => setFormData({ ...formData, branch: itemValue })}
                        style={{ color: formData.branch ? themeStyles["textColor_primary"] : themeStyles["textColor_secondary"] }}
                    >
                        <Picker.Item label="Select Brnach" value="" color='black' />
                        {branchOptions.map((option, index) => (
                            <Picker.Item key={index} label={option} value={option} />
                        ))}
                    </Picker>
                    <View style={styles.bar} />

                    <Picker
                        selectedValue={formData.batch}
                        onValueChange={(itemValue) => setFormData({ ...formData, batch: itemValue })}
                        style={{ color: formData.batch ? themeStyles["textColor_primary"] : themeStyles["textColor_secondary"] }}
                    >
                        <Picker.Item label="Select Batch" value="" color='black' />
                        {batchOptions.map((option, index) => (
                            <Picker.Item key={index} label={option} value={option} />
                        ))}
                    </Picker>
                    <View style={styles.bar} />

                    <Picker
                        selectedValue={formData.section}
                        onValueChange={(itemValue) => setFormData({ ...formData, section: itemValue })}
                        style={{ color: formData.section ? themeStyles["textColor_primary"] : themeStyles["textColor_secondary"] }}
                    >
                        <Picker.Item label="Select Section" value="" color='black' />
                        {sectionOptions.map((option, index) => (
                            <Picker.Item key={index} label={option.label} value={option.value} />
                        ))}
                    </Picker>
                    <View style={styles.bar} />

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 20 }}>
                    <Checkbox style={{ marginRight: 10 }} color={themeStyles["textColor_primary"]} value={isChecked} onValueChange={setChecked} />
                    <Text style={{ color: themeStyles["textColor_primary"] }}>Agree to <Link href='https://docs.expo.dev/versions/latest/sdk/checkbox/#color' style={{ color: themeStyles["backgroundColor_secondary"] }} >terms and conditions</Link> </Text>
                </View>
                <TouchableOpacity style={styles.authActionButton} onPress={handleFormSubmit}>
                    <Text style={styles.authActionButtonText}>Sign up</Text>
                    <Entypo name="login" size={24} />
                    {/* <Entypo name="login" size={24} color={styles.colorWhite} /> */}
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Form