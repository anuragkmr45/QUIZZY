import { FC } from 'react';
import { Dimensions } from 'react-native';
import { useTheme } from '@/hooks';
import AuthFrame from '@/components/frames/AuthFrame';
import Form from '@/sections/auth/signin/Form';

const Signin: FC = () => {

    const { themeStyles } = useTheme();
    const { height } = Dimensions.get('window');

    return (
        <AuthFrame pageTitle='Sign In' img={require('../../assets/images/hero-imgs/singinHero.webp')} bottomContainerHeight={height * 0.7}>
            <Form themeStyles={themeStyles} />
        </AuthFrame>
    )
}

export default Signin