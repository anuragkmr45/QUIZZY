import { FC } from 'react';
import { View } from 'react-native';
import { useTheme } from '@/hooks';
import Details from '@/sections/dashboard/profile/Details';
import { ProfileStyles } from '@/styles/dashboard/ProfileStyles';

const Profile: FC = () => {

    const { themeStyles } = useTheme();
    const styles = ProfileStyles(themeStyles);

    return (
        <View style={styles.container}>
            <View style={styles.profile} />
            <View style={styles.contentContainer}>
                <Details themeStyle={themeStyles} />
            </View>
        </View>
    )
}

export default Profile