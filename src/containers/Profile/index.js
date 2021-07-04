import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import useAuth from '../../hooks/useAuth';
import Login from '../Login'

const Profile = ({ navigation }) => {

    const { } = useAuth(navigation);
    return (
        <SafeAreaView>
            <Text>Profile</Text>
        </SafeAreaView>
    );
}

export default Profile;