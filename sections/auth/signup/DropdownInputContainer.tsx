import { View } from 'react-native';
import Dropdown from '../../../components/forms/Dropdown';

const DropdownInputContainer = ({ containerStyle, options, selectedValue, onValueChange, placeholder, dividerStyle, themeStyles }) => {
    return (
        <View style={containerStyle}>
            <Dropdown
                options={options}
                selectedValue={selectedValue}
                onValueChange={onValueChange}
                placeholder={placeholder}
                DropdownStyle={{
                    color: selectedValue ? themeStyles["textColor_primary"] : themeStyles["textColor_secondary"],
                }}
            />
            <View style={dividerStyle} />
        </View>
    )
}

export default DropdownInputContainer