import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import useAuth from '../../hooks/useAuth'

const Profile = () => {

    const { authenticated } = useAuth();
    console.log('User is logged? =>', authenticated)
    return (
        <SafeAreaView>
            <Text>Profile</Text>
        </SafeAreaView>
    );
}

export default Profile;