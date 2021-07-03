import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomText from '../CustomText';
import { size, colors } from '../../constants'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image style={styles.icon} resizeMode='contain' source={require('../../assets/huella.png')} />
            </View>
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