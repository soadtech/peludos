import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { colors } from '../../constants';

const Chat = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ flex: 0.1, justifyContent: 'center', backgroundColor: 'white', paddingHorizontal: 20 }}>
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
                <View style={{ flex: 1, backgroundColor: colors.grayLight }}></View>
                <View style={{ flex: 0.08, justifyContent: 'space-between', backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 5, paddingVertical: 5 }}>
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
            </View>
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