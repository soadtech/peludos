import React from 'react';
import { Text } from 'react-native'

const CustomText = ({ children, size, lef = 0, color = '#000', ...rest }) => {
    return (
        <Text style={{ ...rest, fontSize: size, marginLeft: lef, color }}>{children}</Text>
    );
}

export default CustomText;