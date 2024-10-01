import { View, Text, Dimensions, Linking, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { Entypo } from '@expo/vector-icons';

import { DefaultThemeType } from '@/constants/themes';
import { CreatorCardStyles } from '@/styles/dashboard/CreatorStyles';

type TeamCardType = {
    themeStyles: DefaultThemeType,
    img: string,
    name: string,
    insta?: string,
    intro: string,
    github?: string,
    linkedin?: string,
    twitter?: string,
    mail?: string,
}

const TeamCard = ({ themeStyles, img, name, insta, intro, github, linkedin, twitter, mail }: TeamCardType) => {

    const limitedIntro = intro && (intro.length > 38 ? intro.substring(0, 150) + " ... " : intro);

    const { height, width } = Dimensions.get('screen');
    const styles = CreatorCardStyles(themeStyles);

    return (
        <View style={styles.container}>
            <Image
                style={{ height: height * 0.15, width: width * 0.30, borderRadius: 20, marginVertical: 'auto' }}
                source={img}
                contentFit="cover"
                transition={700}
                cachePolicy='memory-disk'
            />
            <View style={{ width: width * 0.6, marginVertical: 'auto' }}>
                <View>
                    <Text style={{ color: themeStyles["textColor_primary"], fontSize: 18, fontWeight: 'semibold' }}>
                        {name}
                    </Text>
                    <Text style={{ color: themeStyles["textColor_secondary"], fontSize: 12, marginVertical: 6 }}>
                        {limitedIntro}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>

                    {
                        linkedin && (
                            <TouchableOpacity
                                onPress={() => { Linking.openURL(linkedin) }}
                                style={{ marginRight: 8, marginVertical: 'auto' }}
                            >
                                <Entypo name="linkedin" size={18} color={themeStyles["textColor_primary"]} />
                            </TouchableOpacity>
                        )
                    }

                    {
                        github && (
                            <TouchableOpacity
                                onPress={() => { Linking.openURL(github) }}
                                style={{ marginHorizontal: 8, marginVertical: 'auto' }}
                            >
                                <Entypo name="github" size={18} color={themeStyles["textColor_primary"]} />
                            </TouchableOpacity>
                        )
                    }

                    {
                        twitter && (
                            <TouchableOpacity
                                onPress={() => { Linking.openURL(twitter) }}
                                style={{ marginHorizontal: 8, marginVertical: 'auto' }}
                            >
                                <Entypo name="twitter" size={18} color={themeStyles["textColor_primary"]} />
                            </TouchableOpacity>
                        )
                    }

                    {
                        mail && (
                            <TouchableOpacity
                                onPress={() => { Linking.openURL(`mailto:${mail}`) }}
                                style={{ marginHorizontal: 8, marginVertical: 'auto' }}
                            >
                                <Entypo name="mail" size={18} color={themeStyles["textColor_primary"]} />
                            </TouchableOpacity>
                        )
                    }

                    {
                        insta && (
                            <TouchableOpacity
                                onPress={() => { Linking.openURL(insta) }}
                                style={{ marginLeft: 8, marginVertical: 'auto' }}
                            >
                                <Entypo name="instagram" size={16} color={themeStyles["textColor_primary"]} />
                            </TouchableOpacity>
                        )
                    }
                </View>
            </View>
        </View>
    )
}

export default TeamCard