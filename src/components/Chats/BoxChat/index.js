import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CustomText from '../../CustomText';
import { size, colors } from '../../../constants'

const BoxChat = ({ name, middlename, imgProfile, lastMessage, time, me, read, active }) => {
    return (
        <TouchableOpacity style={styles.boxChat}>
            <View>
                <View style={{ position: 'relative' }}>
                    <Image style={styles.profile} resizeMode='contain' source={{ uri: imgProfile }} />
                    <View style={{ position: 'absolute', top: 5, left: 0, borderRadius: 50, backgroundColor: 'green', width: active ? 13 : 0, height: active ? 13 : 0 }}></View>
                </View>

            </View>
            <View style={{ marginLeft: 10, flex: 1 }}>
                <CustomText size={size.medium}>{name + ' ' + middlename}</CustomText>
                <View style={{ flexDirection: 'row', width: '88%' }}>
                    {me ? (<CustomText size={14}>You: {lastMessage}</CustomText>) : (
                        <Text style={{ fontWeight: 'bold' }}>
                            <Text>{name}: </Text>
                            {lastMessage}
                        </Text>
                    )}
                    <View style={{ marginHorizontal: 5 }}>
                        <CustomText size={14}>*</CustomText>
                    </View>
                    <CustomText size={14}>{time}</CustomText>
                </View>
            </View>
            {read && (
                <View style={{ justifyContent: 'center' }}>
                    <View style={{ width: 10, height: 10, borderRadius: 50, backgroundColor: colors.primary }}></View>
                </View>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    boxChat: {
        width: '100%',
        paddingVertical: 15,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.gray
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 50
    }
})

export default BoxChat;