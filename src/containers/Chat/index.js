import React, { useEffect, useState } from 'react';
import { View, Text, Platform, SafeAreaView, Keyboard, UIManager, StyleSheet, Image, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView } from 'react-native'
import { colors } from '../../constants';
import Message from '../../components/Chats/Message'

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}


const data = [
    {
        id: '1',
        profile: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
        message: 'Consequat cillum uate nisi exercitation dolor minim aliquip Lorem est in occaecat proident. Nulla ipsum nulla irure ex nulla irure ut dolor fugiat anim quis amet ea. Nulla Lorem dolor aute nisi nisi ad occaecaat adipisicing laborum ea reprehenderit irure.',
        me: true
    },
    {
        id: '2',
        profile: 'https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1535&q=80',
        message: 'Oh! Yes.',
        me: false
    },
    {
        id: '3',
        profile: 'https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1535&q=80',
        message: 'Chi.',
        me: false
    },
    {
        id: '4',
        profile: 'https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1535&q=80',
        message: 'Consequat cillum uate nisi exercitation dolor minim aliquip Lorem est in occaecat proident. Nulla ipsum nulla irure ex nulla irure.',
        me: false
    },
]

const Chat = ({ navigation }) => {

    const [flexBox, setFlexBox] = useState(0.1)

    const renderItem = ({ item }) => (
        <Message key={item.id} profile={item.profile} me={item.me} message={item.message} />
    )

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const _keyboardDidShow = () => {
        setFlexBox(0.2)
    };

    const _keyboardDidHide = () => {
        setFlexBox(0.1)
    };



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
                <View style={{ flex: flexBox, justifyContent: 'center', backgroundColor: 'white', paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ marginRight: 10, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.goBack()}>
                            <Image style={styles.back} resizeMode='contain' source={{ uri: 'https://image.flaticon.com/icons/png/512/507/507257.png' }} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.profile} resizeMode='contain' source={{ uri: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80' }} />
                            <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: 'bold' }}>Fernando Ropero</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: colors.grayLight, paddingHorizontal: 10 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>

                <View style={{ flex: flexBox, justifyContent: 'space-between', backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 5, paddingVertical: 5 }}>
                    <View style={{ flex: 0.2, justifyContent: 'center' }}>
                        <View style={{ backgroundColor: colors.grayLight, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 15, borderRadius: 20 }}>
                            <Image style={{ width: 25, height: 25 }} resizeMode='contain' source={{ uri: 'https://image.flaticon.com/icons/png/512/659/659774.png' }} />
                        </View>
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 5 }}>
                        <TextInput placeholder="Typing..." style={{ width: '100%', paddingHorizontal: 5, backgroundColor: colors.grayLight, borderRadius: 15, height: '100%' }} />
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <View style={{ backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 15, borderRadius: 20 }}>
                            <Image style={{ width: 25, height: 25 }} resizeMode='contain' source={{ uri: 'https://image.flaticon.com/icons/png/512/876/876777.png' }} />
                        </View>
                    </View>
                </View>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    back: {
        width: 30,
        height: 30
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 50
    }

})

export default Chat;