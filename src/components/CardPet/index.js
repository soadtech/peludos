import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native'

const CardPet = ({ name, time, img, imgPet, handler }) => {
    return (
        <TouchableOpacity onPress={handler} style={styles.container}>
            <View style={[styles.profile, { alignItems: 'center' }]}>
                <View style={[styles.profile, { alignItems: 'center' }]}>
                    <Image style={styles.imgProfile} resizeMode='contain' source={{ uri: img }} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
                        <Text style={{ fontSize: 18 }}>{time} min</Text>
                    </View>
                </View>
                <Image style={styles.bookmark} resizeMode='contain' source={require('../../assets/bookmark.png')} />
            </View>

            <View style={{ marginTop: 10 }}>
                <ImageBackground imageStyle={{ borderRadius: 20 }} style={{ width: '100%', height: 200 }} source={{ uri: imgPet }}></ImageBackground>
            </View>

            <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fee3e3', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }}>
                        <Image style={{ width: 30, height: 30 }} resizeMode='contain' source={{ uri: 'https://image.flaticon.com/icons/png/512/833/833472.png' }} />
                        <Text style={{ marginLeft: 10 }}>1,4k</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff5e1', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }}>
                        <Image style={{ width: 30, height: 30 }} resizeMode='contain' source={{ uri: 'https://image.flaticon.com/icons/png/512/855/855502.png' }} />
                        <Text style={{ marginLeft: 10 }}>1,4k</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#e6eeff', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }}>
                        <Image style={{ width: 30, height: 30 }} resizeMode='contain' source={{ uri: 'https://image.flaticon.com/icons/png/512/929/929468.png' }} />
                        <Text style={{ marginLeft: 10 }}>1,4k</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 10
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imgProfile: {
        width: 80,
        height: 80,
        borderRadius: 150
    },
    bookmark: {
        width: 30,
        height: 30
    }
})

export default CardPet;