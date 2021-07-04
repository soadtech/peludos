import React, { useRef } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, LogBox, TouchableOpacity, useWindowDimensions, Image, ScrollView } from 'react-native'
import Header from '../../components/Header';
import BoxPets from '../../components/BoxPets';
import CardPet from '../../components/CardPet';
import Publish from '../../components/Publish';
import BottomSheet from "react-native-gesture-bottom-sheet";
import { colors } from '../../constants'

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

const HeaderPublish = ({ bottomSheet }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => bottomSheet.current.close()}>
                    <Image style={{ width: 30, height: 30 }} resizeMode='contain' source={{ uri: 'https://image.flaticon.com/icons/png/512/507/507257.png' }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, marginLeft: 10 }}>Crear publicacion</Text>
            </View>
            <View>
                <TouchableOpacity style={{ backgroundColor: colors.primary, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Publicar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Home = ({ navigation }) => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const bottomSheet = useRef();
    const renderItem = ({ item }) => (
        <CardPet navigation={navigation} handler={() => navigation.navigate('InfoPet')} name={item.name} time={item.time} img={item.img} imgPet={item.imgPet} />
    )

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Header />
                <View style={{ marginTop: 20 }}>
                    <Publish handler={() => bottomSheet.current.show()} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <BoxPets />
                </View>
                <View style={{ marginTop: 20, flex: 1 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <BottomSheet draggable={false} ref={bottomSheet} height={windowHeight - 50}>
                    <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20 }}>
                        <HeaderPublish bottomSheet={bottomSheet} />
                        <ScrollView style={{ flex: 1 }}>
                            <Text>1</Text>
                        </ScrollView>
                    </View>
                </BottomSheet>
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
export default Home;