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
                <View style={{ marginTop: 20, flex: 1.5 }}>
                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                        <>
                            <View style={{ flex: 1 }}>
                                <ImageBackground imageStyle={{ borderRadius: 20 }} style={{ width: '100%', height: 350, position: 'relative' }} source={{ uri: 'https://images.unsplash.com/photo-1487300001871-12053913095d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' }}></ImageBackground>
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

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, marginTop: 20 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={styles.imgProfile} resizeMode='contain' source={{ uri: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80' }} />
                                    <View style={{ justifyContent: 'center' }}>
                                        <CustomText size={size.normal}>Fernando Ropero</CustomText>
                                        <CustomText size={size.normal} color={colors.gray}>Owner</CustomText>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={[styles.boxPet, { backgroundColor: colors.primaryLight }]}>
                                        <Image style={styles.imagePet} resizeMode='contain' source={{ uri: 'https://image.flaticon.com/icons/png/512/159/159832.png' }} />
                                    </View>
                                    <View style={[styles.boxPet, { marginLeft: 10 }]}>
                                        <Image style={styles.imagePet} resizeMode='contain' source={{ uri: 'https://image.flaticon.com/icons/png/512/876/876221.png' }} />
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <View style={{ marginBottom: 15 }}>
                                    <CustomText size={size.medium}>Detalle:</CustomText>
                                </View>
                                <CustomText size={size.normal} color={colors.gray} >Hello, i am Fernando Ropero, I have a lot of cats in my house and i find it difficult to take take care of them if you wish to take Emilia please contact me.</CustomText>
                            </View>
                        </>
                    </ScrollView>
                </View>
                <View style={{ marginTop: 20, justifyContent: 'flex-end', flex: 0.2 }}>
                    <TouchableOpacity style={styles.btnAdopt}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>Adopt Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
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
    },
    imgProfile: {
        width: 50,
        height: 50,
        borderRadius: 150
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
export default InfoPet;