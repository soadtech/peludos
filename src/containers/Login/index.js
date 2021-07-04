import React from 'react';
import { SafeAreaView, Text, StatusBar, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { colors } from '../../constants';

const Login = ({ navigation }) => {

    const handleClose = (e) => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    {
                        name: 'Home'
                    },
                ],
            })
        );

    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            <StatusBar barStyle='light-content' />
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={handleClose}>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', flex: 0.7, justifyContent: 'center' }}>
                    <Image style={styles.logo} resizeMode='contain' source={{ uri: 'https://image.flaticon.com/icons/png/512/1998/1998592.png' }} />
                    <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold' }}>Hi, human</Text>
                    <Text style={{ color: colors.gray, fontSize: 25 }}>Do you want to help our friend?</Text>
                </View>
                <View style={{ flex: 0.3, justifyContent: 'space-around' }}>
                    <View>
                        <TouchableOpacity style={[styles.btnLogin, { backgroundColor: colors.primary }]}>
                            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'white' }}>Sign Up with Email ID</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btnLogin, { backgroundColor: 'white', marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>
                            <Image style={{ width: 30, height: 30 }} resizeMode='contain' source={{ uri: 'https://image.flaticon.com/icons/png/512/281/281764.png' }} />
                            <Text style={{ marginLeft: 10, textAlign: 'center', fontSize: 18, fontWeight: 'bold', }}>Sign Up width Google</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', textAlign: 'center', marginRight: 10, fontSize: 18 }}>Already have an account?</Text>
                        <TouchableOpacity style={{ justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: 'white', justifyContent: 'center', textDecorationLine: 'underline', fontSize: 18 }}>Sign up</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    logo: {
        width: 150,
        height: 150
    },
    btnLogin: {
        paddingVertical: 20,
        borderRadius: 10
    }
})
export default Login;