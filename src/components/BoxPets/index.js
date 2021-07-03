import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import CustomText from '../CustomText';
import { colors, size } from '../../constants'

const BoxPets = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.box}>
                <View style={styles.boxPet}>
                    <Image style={styles.imagePet} resizeMode='contain' source={require('../../assets/cat.png')} />
                </View>
                <CustomText left={25} size={size.medium}>Cats</CustomText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <View style={styles.boxPet}>
                    <Image style={styles.imagePet} resizeMode='contain' source={require('../../assets/guide-dog.png')} />
                </View>
                <CustomText left={25} size={size.medium}>Cats</CustomText>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: '47%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        backgroundColor: 'white',
        paddingVertical: 5,
        borderRadius: 10
    },
    boxPet: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: colors.secondaryLigth,
        borderRadius: 10
    },
    imagePet: {
        width: 30,
        height: 30
    }
})

export default BoxPets;