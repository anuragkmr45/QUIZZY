import { useState, useEffect } from 'react';
import { Image } from 'expo-image';
import { debounce } from 'rate-limiter-utils';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefaultThemeType } from '@/constants/themes';
import { useAuthToken } from '@/hooks';
import apiEndpoints from '@/services/api';

const Details = ({ themeStyle }: { themeStyle: DefaultThemeType }) => {

    const [userData, setUserData] = useState({
        name: '',
        registrationnumber: '',
        section: '',
        email: '',
        branch: '',
        batch: ''
    });
    const [profiel, setProfile] = useState('');
    const { getToken } = useAuthToken();

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted) {

            const image = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });

            if (!image.canceled) {
                console.log('Image URI assets fileName:', image.assets[0].fileName);
                console.log('Image URI assets mimeType:', image.assets[0].mimeType);
                console.log('Image URI assets mimeType:', image.assets[0].mimeType);
                console.log('Image URI assets type:', image.assets[0].type);
                console.log('Image URI assets uri:', image.assets[0].uri);
                setProfile(image.assets[0].uri)
            }
        }
    };

    const handleGetProfile = debounce(async () => {
        try {
            const authToken = await getToken();
            const res: string = await apiEndpoints.getProfile({ authToken });
            setUserData(res)
        } catch (error) {
            console.error('error: ', error)
        }
    }, 1000)

    useEffect(() => {

        const checkUserData = async () => {
            const userData = await AsyncStorage.getItem('userData');
            if (userData) {
                setUserData(JSON.parse(userData))
            } else {
                handleFetchUserData()
            }
        }

        checkUserData();
    }, [])

    return (
        <View>
            {
                profiel != '' ? (
                    <Image source={{ uri: img }} alt='disnjeue' style={{ height: 200, width: 200 }} />
                ) : (
                    <TouchableOpacity style={{ width: 120, height: 120, backgroundColor: themeStyle["textColor_primary"], borderRadius: 100, marginHorizontal: 'auto' }} onPress={pickImage}>
                    </TouchableOpacity>
                )
            }

            <ScrollView>
                <View style={{ paddingHorizontal: '9%', marginVertical: 20 }}>
                    <View style={{ elevation: 4, backgroundColor: themeStyle["backgroundColor_primary"], shadowColor: themeStyle["textColor_secondary"], borderRadius: 20, height: 45, marginVertical: 8 }}>
                        <Text style={{ color: themeStyle["textColor_primary"], marginVertical: 'auto', marginLeft: 20, fontSize: 16 }}>{userData.name}</Text>
                    </View>
                    <View style={{ elevation: 4, backgroundColor: themeStyle["backgroundColor_primary"], shadowColor: themeStyle["textColor_secondary"], borderRadius: 20, height: 45, marginVertical: 8 }}>
                        <Text style={{ color: themeStyle["textColor_primary"], marginVertical: 'auto', marginLeft: 20, fontSize: 16 }}>{userData.registrationnumber}</Text>
                    </View>
                    <View style={{ elevation: 4, backgroundColor: themeStyle["backgroundColor_primary"], shadowColor: themeStyle["textColor_secondary"], borderRadius: 20, height: 45, marginVertical: 8 }}>
                        <Text style={{ color: themeStyle["textColor_primary"], marginVertical: 'auto', marginLeft: 20, fontSize: 16 }}>{userData.section}</Text>
                    </View>
                    <View style={{ elevation: 4, backgroundColor: themeStyle["backgroundColor_primary"], shadowColor: themeStyle["textColor_secondary"], borderRadius: 20, height: 45, marginVertical: 8 }}>
                        <Text style={{ color: themeStyle["textColor_primary"], marginVertical: 'auto', marginLeft: 20, fontSize: 16 }}>{userData.email}</Text>
                    </View>
                    <View style={{ elevation: 4, backgroundColor: themeStyle["backgroundColor_primary"], shadowColor: themeStyle["textColor_secondary"], borderRadius: 20, height: 45, marginVertical: 8 }}>
                        <Text style={{ color: themeStyle["textColor_primary"], marginVertical: 'auto', marginLeft: 20, fontSize: 16 }}>{userData.branch}</Text>
                    </View>
                    <View style={{ elevation: 4, backgroundColor: themeStyle["backgroundColor_primary"], shadowColor: themeStyle["textColor_secondary"], borderRadius: 20, height: 45, marginVertical: 8 }}>
                        <Text style={{ color: themeStyle["textColor_primary"], marginVertical: 'auto', marginLeft: 20, fontSize: 16 }}>{userData.batch}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Details