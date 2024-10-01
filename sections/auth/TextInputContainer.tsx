import { View, TextInput, TextInputProps, KeyboardTypeOptions } from 'react-native';

type TextInputContainerProps = {
    containerStyle: object,
    placeholder: string,
    placeholderTextColor: string,
    inputFieldStyle: object,
    keyboardType: KeyboardTypeOptions,
    value: string,
    onChangeEvent: (text: string) => void,
    cursorColor: string,
    autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | undefined,
    autoComplete: 'off' | 'name' | 'email' | 'password' | 'username' | undefined
}

const TextInputContainer = ({ containerStyle, placeholder, placeholderTextColor, inputFieldStyle, keyboardType, value, onChangeEvent, cursorColor, autoCapitalize, autoComplete }: TextInputContainerProps) => {
    return (
        <View style={containerStyle}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={inputFieldStyle}
                keyboardType={keyboardType}
                value={value}
                onChangeText={onChangeEvent}
                cursorColor={cursorColor}
                autoCapitalize={autoCapitalize}
                autoComplete={autoComplete}
            />
        </View>
    )
}

export default TextInputContainer