import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../../../constants'

const MAX_LENGTH_MESSAGE = 39;
const defaultValues = {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    alignSelf: 'center',
}

const Message = ({ profile, message, me }) => {

    const positionMessage = me ? 'row' : 'row-reverse';
    const marginProfile = me ? [10, 0] : [0, 10];
    const messageLength = message.length;

    const widthBox = messageLength >= MAX_LENGTH_MESSAGE;
    return (
        <View style={{ flexDirection: positionMessage, width: '100%', marginTop: 20 }}>
            <View style={{ justifyContent: 'flex-end', marginLeft: marginProfile[1], marginRight: marginProfile[0] }}>
                <Image style={{ width: 30, height: 30, borderRadius: 50 }} resizeMode='contain' source={{ uri: profile }} />
            </View>
            <View style={[widthBox ? styles.boxMessage : styles.widthBox, { backgroundColor: me ? 'white' : colors.primary }]}>
                <Text style={{ color: me ? colors.gray : 'white', fontSize: 17 }}>{message}</Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    widthBox: {
        ...defaultValues
    },
    boxMessage: {
        ...defaultValues,
        width: '85%'
    }
})

export default Message;