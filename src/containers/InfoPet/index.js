import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native'
import Header from '../../components/Header';
import { colors, size } from '../../constants';
import CustomText from '../../components/CustomText';

const InfoPet = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Header goBack={() => navigation.goBack()} />
                <View style={{ marginTop: 20, flex: 1 }}>
                    <ScrollView style={{ flex: 1 }}>
                        <>
                            <View style={{ flex: 1 }}>
                                <ImageBackground imageStyle={{ borderRadius: 20 }} style={{ width: '100%', height: 300, position: 'relative' }} source={{ uri: 'https://images.unsplash.com/photo-1487300001871-12053913095d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' }}></ImageBackground>
                                <View style={styles.infoPet}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <CustomText size={size.big}>Emilia Cat</CustomText>
                                            <CustomText size={size.normal} color={colors.gray}>Dosmetic Short Hair</CustomText>
                                        </View>
                                        <View>
                                            <Image style={styles.bookmark} resizeMode='contain' source={require('../../assets/bookmark.png')} />
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ backgroundColor: colors.secondaryLigth, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 10 }}>
                                            <Text style={{ color: colors.primary, fontSize: 15, fontWeight: 'bold' }}>Adult</Text>
                                        </View>
                                        <View style={{ marginLeft: 10, backgroundColor: colors.secondaryLigth, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 10 }}>
                                            <Text style={{ color: colors.primary, fontSize: 15, fontWeight: 'bold' }}>Male</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </>
                    </ScrollView>
                </View>
                <View style={{ marginTop: 20, justifyContent: 'flex-end', flex: 1 }}>
                    <TouchableOpacity style={styles.btnAdopt}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>Adopt Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
        paddingVertical: 18,
        backgroundColor: '#f3f3f3'
    },
    btnAdopt: {
        width: '100%',
        backgroundColor: colors.primary,
        borderRadius: 30,
        paddingVertical: 20
    },
    infoPet: {
        position: 'absolute',
        borderRadius: 20,
        left: 0,
        bottom: 0,
        backgroundColor: 'white',
        paddingHorizontal: 25,
        paddingVertical: 10,
        width: '100%',
    },
    bookmark: {
        width: 30,
        height: 30
    }
})
export default InfoPet;