import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../constants'

const Publish = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.imgProfile} resizeMode='contain' source={{ uri: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80' }} />
            <Text style={{ color: colors.gray, marginLeft: 8, fontSize: 18, fontWeight: 'bold' }}>Do you want to upload a pet?</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    imgProfile: {
        width: 60,
        height: 60,
        borderRadius: 150
    }
})

export default Publish;