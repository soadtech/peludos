import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import CardPet from '../../components/CardPet';
import Header from '../../components/Header';
import useAuth from '../../hooks/useAuth';
const data = [
    {
        id: '1',
        img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
        imgPet: 'https://images.unsplash.com/photo-1487300001871-12053913095d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        name: 'Fernando Ropero',
        time: '10'
    },
    {
        id: '2',
        img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
        imgPet: 'https://images.unsplash.com/photo-1487300001871-12053913095d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        name: 'Linda Acosta',
        time: '20'
    },
    {
        id: '3',
        img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
        imgPet: 'https://images.unsplash.com/photo-1487300001871-12053913095d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        name: 'Linda Acosta',
        time: '20'
    },
]

const BookMark = ({ navigation }) => {
    const { } = useAuth(navigation);
    const renderItem = ({ item }) => (
        <CardPet handler={() => navigation.navigate('InfoPet')} name={item.name} time={item.time} img={item.img} imgPet={item.imgPet} />
    )
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Header />
                <View style={{ marginTop: 20, flex: 1 }}>
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
        paddingHorizontal: 18,
        paddingVertical: 18,
        backgroundColor: '#f3f3f3'
    }
})
export default BookMark;