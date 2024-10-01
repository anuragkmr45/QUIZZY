import { Picker } from '@react-native-picker/picker';

const Dropdown = ({ options, selectedValue, onValueChange, placeholder, DropdownStyle }) => {

    return (
        <Picker
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            style={DropdownStyle}
        >
            <Picker.Item label={placeholder} value="" color='black' />
            {options.map((option, index) => (
                <Picker.Item key={index} label={option.label} value={option.value} />
            ))}
        </Picker>
    );
};

export default Dropdown;