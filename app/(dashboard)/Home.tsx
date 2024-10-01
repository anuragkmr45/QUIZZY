import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { debounce } from 'rate-limiter-utils';

import { HomeStyles } from '@/styles/dashboard/HomeStylest';
import apiEndpoints from '@/services/api';
import { useTheme, useAuthToken } from '@/hooks';
import TopContainer from '@/sections/dashboard/home/TopContainer';
import BottomContainer from '@/sections/dashboard/home/BottomContainer';

const Home = () => {

    const { themeStyles } = useTheme();
    const { getToken } = useAuthToken();
    const [userData, setUserData] = useState({});

    const styles = HomeStyles(themeStyles)

    const handleFetchUserData = debounce(async () => {
        try {
            const authToken = await getToken();
            const res = await apiEndpoints.getProfile({ authToken });
            setUserData(res)
            await AsyncStorage.setItem('userData', JSON.stringify(res))
        } catch (error) {
            console.error('error: ', error)
        }
    }, 1000);

    useEffect(() => {

        const checkUserData = async () => {
            const userData = await AsyncStorage.getItem('userData');
            if (userData) {
                setUserData(JSON.parse(userData))
            } else {
                handleFetchUserData()
            }
        }

        checkUserData()

    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <TopContainer userData={userData} />
            <BottomContainer />
        </SafeAreaView>
    )
}

export default Home
