import React from 'react';
import { Text } from 'react-native'

const CustomText = ({ children, size, ...rest }) => {
    return (
        <Text style={{ ...rest, fontSize: size }}>{children}</Text>
    );
}

export default CustomText;