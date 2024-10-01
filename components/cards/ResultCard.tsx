import { View, Text } from 'react-native';
import { useTheme } from '@/hooks';
import { ResultScreeenCardStyles } from '@/styles/dashboard/ResultScreeenStyles';

const ResultCard = () => {

    // const formatDate = (dateString) => {
    //     const date = new Date(dateString)
    //     const options = { year: 'numeric', month: 'long', day: 'numeric' }
    //     return date.toLocaleDateString('en-US', options)
    // }

    const { themeStyles } = useTheme();
    const styles = ResultScreeenCardStyles(themeStyles);

    return (
        <View style={{ marginVertical: 6 }}>
            <View style={styles.cardContainer}>
                <Text style={styles.title}>
                    result.title
                </Text>
                <Text style={styles.subtitleA}>
                    Total Marks: 10
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: themeStyles["textColor_primary"], opacity: 0.6, fontSize: 14 }}>
                        Total Obtained: 10
                    </Text>
                    {/* <Text style={{ color: defaultStyling.secondaryText, opacity: 0.5, fontSize: 12 }}> {formatDate(result.datecreated)}</Text> */}
                    <Text style={{ color: themeStyles["textColor_secondary"], opacity: 0.5, fontSize: 12 }}> 12th june</Text>
                </View>
            </View>
        </View>
    )
}

export default ResultCard