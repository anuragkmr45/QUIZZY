import { FC } from 'react';
import { Dimensions } from 'react-native';
import { useTheme } from '@/hooks';
import Form from '@/sections/auth/signup/Form';
import AuthFrame from '@/components/frames/AuthFrame';

const Signup: FC = () => {

    const { themeStyles } = useTheme();
    const { height } = Dimensions.get('window');

    return (
        <AuthFrame img={require('../../assets/images/hero-imgs/signupHero.webp')} pageTitle='Sign Up' bottomContainerHeight={height * 0.7}>
            <Form themeStyles={themeStyles} />
        </AuthFrame>
    )
}



export default Signup
