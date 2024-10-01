import { View, Dimensions, Text } from 'react-native';
// import Loader from '../../assets/images/icons/loader.gif';

const ScereenLoader = () => {

    const { height, width } = Dimensions.get('screen');

    return (
        <View style={{ backgroundColor: 'gray', height: height, width: width, justifyContent: 'center' }}>
            {/* <Image
                style={{ height: 100, width: 100, justifyContent: 'center', alignSelf: 'center' }}
                source={Loader}
                contentFit="cover"
                transition={700}
                cachePolicy='memory-disk'
            />  */}
            <Text style={{ alignSelf: 'center' }}>Loading ... </Text>
        </View>
    )
}

export default ScereenLoader