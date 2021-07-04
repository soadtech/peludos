import React, { useState } from 'react';
import { SafeAreaView, Text, StatusBar, StyleSheet, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { colors } from '../../constants';

const Auth = ({ handler }) => (
    <>
        <View style={{ alignItems: 'center', flex: 0.7, justifyContent: 'center' }}>
            <Image style={styles.logo} resizeMode='contain' source={{ uri: 'https://image.flaticon.com/icons/png/512/1998/1998592.png' }} />
            <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold' }}>Hi, human</Text>
            <Text style={{ color: colors.gray, fontSize: 25 }}>Do you want to help our friend?</Text>
        </View>
        <View style={{ flex: 0.3, justifyContent: 'space-around' }}>
            <View>
                <TouchableOpacity onPress={handler} style={[styles.btnLogin, { backgroundColor: colors.primary }]}>
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
    </>
);
const LoginEmail = ({ handler }) => {
    const [security, setSecurity] = useState(false)
    return (
        <>
            <View style={{ flex: 0.3, justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold' }}>Welcome back!</Text>
                <Text style={{ color: colors.gray, fontSize: 25 }}>Sign in to your account</Text>
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.6, justifyContent: 'space-around' }}>
                    <View style={{ width: '100%', backgroundColor: colors.gray, flexDirection: 'row', height: 50, borderRadius: 5, alignItems: 'center', paddingHorizontal: 10 }}>
                        <Text style={{ color: colors.grayLight, fontWeight: 'bold', marginRight: 10, fontSize: 18 }}>Email</Text>
                        <TextInput style={{ height: '100%', width: '87%', color: 'white', fontSize: 18, fontWeight: 'bold' }} />
                    </View>

                    <View style={{ width: '100%', backgroundColor: colors.gray, flexDirection: 'row', height: 50, borderRadius: 5, alignItems: 'center', paddingHorizontal: 10 }}>
                        <Text style={{ color: colors.grayLight, fontWeight: 'bold', marginRight: 10, fontSize: 18 }}>Password</Text>
                        <TextInput secureTextEntry={security} style={{ height: '100%', width: '87%', color: 'white', fontSize: 18, fontWeight: 'bold' }} />
                    </View>
                </View>
                <View style={{ flex: 0.2 }}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}>Forgot Password?</Text>
                </View>
                <View style={{ flex: 0.7 }}>
                    <TouchableOpacity onPress={handler} style={[styles.btnLogin, { backgroundColor: colors.primary }]}>
                        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'white' }}>Sign Up with Email ID</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ flex: 0.3, justifyContent: 'space-around' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', textAlign: 'center', marginRight: 10, fontSize: 18 }}>Already have an account?</Text>
                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: 'white', justifyContent: 'center', textDecorationLine: 'underline', fontSize: 18 }}>Sign up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </>
    )
};

const Login = ({ navigation }) => {
    const [auth, setAuth] = useState(true)

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
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
                <View>
                    <TouchableOpacity onPress={handleClose}>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>X</Text>
                    </TouchableOpacity>
                </View>
                {auth ? (<Auth handler={() => setAuth(false)} />) : (<LoginEmail />)}
            </KeyboardAvoidingView>
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