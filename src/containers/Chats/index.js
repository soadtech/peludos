import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import CustomText from '../../components/CustomText';
import { size } from '../../constants';
import BoxChat from '../../components/Chats/BoxChat'


const data = [
    {
        id: '1',
        img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
        name: 'Fernando',
        middlename: 'Ropero',
        lastMessage: 'How is it goin?',
        time: '22:20',
        read: false,
        me: true,
        active: false
    },
    {
        id: '2',
        img: 'https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1714&q=80',
        name: 'Dustin',
        middlename: 'Watson',
        lastMessage: 'Hi, how are you?',
        time: '22:20',
        read: true,
        me: false,
        active: true
    },
    {
        id: '3',
        img: 'https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1535&q=80',
        name: 'Kathryn',
        middlename: 'Pena',
        lastMessage: 'Hey!!!',
        time: '22:20',
        read: true,
        me: false,
        active: true
    },
]
const Chats = () => {
    const renderItem = ({ item }) => (
        <BoxChat key={item.id} name={item.name} middlename={item.middlename} imgProfile={item.img} lastMessage={item.lastMessage} time={item.time} active={item.active} me={item.me} read={item.read} />
    )
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <CustomText size={size.big}>Chats</CustomText>
                <View style={{ flex: 1 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20
    }
})

export default Chats;