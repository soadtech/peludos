import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomText from '../CustomText';
import { size, colors } from '../../constants'

const Header = ({ goBack }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack} style={styles.box}>
                {goBack ? <Image style={styles.icon} resizeMode='contain' source={{ uri: 'https://image.flaticon.com/icons/png/512/507/507257.png' }} /> : <Image style={styles.icon} resizeMode='contain' source={require('../../assets/huella.png')} />}
            </TouchableOpacity>
            <CustomText size={size.medium}>Pet Adoption</CustomText>
            <Image style={styles.icon} resizeMode='contain' source={require('../../assets/campana.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        width: 30,
        height: 30
    },
    box: {
        backgroundColor: colors.secondary,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15
    }
})

export default Header;