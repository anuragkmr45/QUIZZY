import { useState, useEffect, FC } from 'react';
import { View, ScrollView } from 'react-native';
import ResultCard from '@/components/cards/ResultCard';
import { ResultScreeenStyles } from '@/styles/dashboard/ResultScreeenStyles';
// import apiEndpoints from '@/services/api';
import { useAuthToken, useTheme } from '@/hooks';

const Results: FC = () => {

    const { themeStyles } = useTheme();
    // const { getToken } = useAuthToken();

    const styles = ResultScreeenStyles(themeStyles);

    // useEffect(() => {
    //     const handleFetchResults = async () => {
    //         try {
    //             const authToken = await getToken();
    //             const res = await apiEndpoints.getMyResults({ authToken });
    //             console.log('res: ', res);
    //         } catch (error) {
    //             console.error('error: ', error)
    //         }
    //     }

    //     handleFetchResults();
    // }, [])

    return (
        <View style={styles.container}>
            <ScrollView style={{ marginBottom: '16%' }}>
                <ResultCard />
            </ScrollView>
        </View>
    )
}

export default Results