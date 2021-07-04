import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import useAuth from '../../hooks/useAuth';
import Login from '../Login'

const Profile = ({ navigation }) => {

    const { authenticated } = useAuth();
    if (!authenticated) {
        navigation.navigate('Login')
        return null
    }
    return (
        <SafeAreaView>
            <Text>Profile</Text>
        </SafeAreaView>
    );
}

export default Profile;