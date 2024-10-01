import { useState, useMemo, useCallback } from 'react';
import { View, TextInput, TouchableOpacity, ScrollView, Text, ToastAndroid } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { Link, router } from 'expo-router';
import { debounce } from 'rate-limiter-utils';

import { courseOptions, CourseOptionsType } from '@/assets/.data/course';
import { branchOptions } from '@/assets/.data/branch';
import { batchOptions } from '@/assets/.data/batch';
import { sectionOptions } from '@/assets/.data/section';
import { SignUpFormStyles } from '@/styles/auth/SignUpStyles';


import { DefaultThemeType } from '@/constants/themes';
import DropdownInputContainer from './DropdownInputContainer';
import apiEndpoints from '@/services/api';

interface TextInputData {
    key: number;
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    value: string;
    onChangeEvent: React.Dispatch<React.SetStateAction<string>>;
    autoComplete: string | null;
    autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | null;
}

interface DropdownData {
    options: CourseOptionsType;
    selectedValue: string;
    onValueChange: React.Dispatch<React.SetStateAction<string>>;
    placeholder: string;
}

const Form = ({ themeStyles }: { themeStyles: DefaultThemeType }) => {

    const [name, setName] = useState('');
    const [registrationNumber, setRegNo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPass, setIsShowPass] = useState(false);
    const [course, setCourse] = useState('');
    const [batch, setBatch] = useState('2025');
    const [branch, setBranch] = useState('');
    const [section, setSection] = useState('');
    const [isChecked, setChecked] = useState(false);

    const styles = useMemo(() => SignUpFormStyles(themeStyles), [themeStyles]);

    const textInputDatas: TextInputData[] = [
        {
            key: 0,
            placeholder: 'Name',
            keyboardType: 'default',
            value: name,
            onChangeEvent: setName,
            autoComplete: 'name',
            autoCapitalize: null,
        },
        {
            key: 1,
            placeholder: 'Registration No.',
            keyboardType: 'phone-pad',
            value: registrationNumber,
            onChangeEvent: setRegNo,
            autoComplete: null,
            autoCapitalize: null,
        },
        {
            key: 2,
            placeholder: 'Email ID',
            keyboardType: 'email-address',
            value: email,
            onChangeEvent: setEmail,
            autoComplete: null,
            autoCapitalize: 'none'
        },
    ];

    const dropdownDatas: DropdownData[] = [
        {
            options: courseOptions,
            selectedValue: course,
            onValueChange: setCourse,
            placeholder: 'Select Course',
        },
        {
            options: branchOptions,
            selectedValue: branch,
            onValueChange: setBranch,
            placeholder: 'Select Branch',
        },
        {
            options: batchOptions,
            selectedValue: batch,
            onValueChange: setBatch,
            placeholder: 'Select Batch',
        },
        {
            options: sectionOptions,
            selectedValue: section,
            onValueChange: setSection,
            placeholder: 'Select Section',
        },
    ];

    const handleOnChnageEvent = useCallback((text: string, stateChangeFunction: any) => {
        stateChangeFunction(text);
    }, [name, registrationNumber, email, password, course, branch, section]);

    const handleIsFormValid = name !== '' && registrationNumber !== '' && email !== '' && password !== '' && course !== '' && branch !== '' && section !== '' && batch !== '' && isChecked;

    const handleFormSubmit = debounce(async () => {

        const androidId = 'fiorimwe4rdwsed430c'
        const isFormValid = handleIsFormValid;
        try {
            if (isFormValid) {
                const res: any = await apiEndpoints.register({ name, registrationNumber, email, password, batch, branch, section, course, androidId });

                if (res.status === 201) {

                    ToastAndroid.show('Registration successful', ToastAndroid.SHORT);
                    router.navigate('/Signin');
                    return;
                }
            }
            if (!isChecked) {
                ToastAndroid.show('Please agree to terms and conditions', ToastAndroid.SHORT);
                return;
            }

            if (!isFormValid) {
                ToastAndroid.show('ALL DETAILS ARE REQUIRED !! ', ToastAndroid.SHORT);
                return;
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
                    {
                        textInputDatas.map((data) => {
                            return (
                                <View style={styles.inputFieldContainer} key={data.key}>
                                    <TextInput
                                        placeholder={data.placeholder}
                                        placeholderTextColor={themeStyles["textColor_secondary"]}
                                        style={styles.inputFields}
                                        keyboardType={data.keyboardType}
                                        value={data.value}
                                        onChange={(text) => handleOnChnageEvent(text, data.onChangeEvent)}
                                        cursorColor={themeStyles["textColor_primary"]}
                                        autoCapitalize={data.autoCapitalize}
                                        autoComplete={data.autoComplete}
                                    />
                                </View>
                            )
                        })
                    }
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
                    {
                        dropdownDatas.map((data, index) => {
                            return (
                                <DropdownInputContainer
                                    key={index}
                                    containerStyle={styles.inputFieldContainer}
                                    options={data.options}
                                    selectedValue={data.selectedValue}
                                    onValueChange={data.onValueChange}
                                    placeholder={data.placeholder}
                                    dividerStyle={styles.bar}
                                    themeStyles={themeStyles}
                                />
                            )
                        })
                    }
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 20 }}>
                    <Checkbox style={{ marginRight: 10 }} color={themeStyles["textColor_primary"]} value={isChecked} onValueChange={setChecked} />
                    <Text style={{ color: themeStyles["textColor_primary"] }}>Agree to <Link href='https://docs.expo.dev/versions/latest/sdk/checkbox/#color' style={{ color: themeStyles["backgroundColor_secondary"] }} >terms and conditions</Link> </Text>
                </View>
                <TouchableOpacity style={styles.authActionButton} onPress={handleFormSubmit}>
                    <Text style={styles.authActionButtonText}>Sign up</Text>
                    <Entypo name="login" size={24} color={styles.colorWhite} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Form