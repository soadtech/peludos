import React, { useRef, useState } from 'react';
import { View, TextInput, Text, SafeAreaView, StyleSheet, FlatList, LogBox, TouchableOpacity, useWindowDimensions, Image, ScrollView } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
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

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

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

    const [filepath, setFilePath] = useState({
        data: '',
        uri: ''
    });
    const [fileData, setFileData] = useState('')
    const [fileUri, setFilUri] = useState([])

    const chooseImage = () => {
        let options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response.assets[0].uri);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.assets[0].uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                // alert(JSON.stringify(response));s
                console.log('response', source);
                setFilePath(response)
                setFileData(response.data)
                setFilUri([...fileUri, source])
            }
        });
    }
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
                        <View style={{ flex: 1 }}>
                            <ScrollView style={{ flex: 1 }}>
                                <View style={{ marginTop: 30 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Datos basicos</Text>

                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <View style={{ marginTop: 10, flex: 0.5 }}>
                                            <Text style={{ fontSize: 18, marginBottom: 5 }}>Nombre</Text>
                                            <TextInput style={{ width: '100%', paddingHorizontal: 5, height: 40, borderRadius: 15, backgroundColor: colors.gray }} />
                                        </View>
                                        <View style={{ width: 10 }}></View>
                                        <View style={{ marginTop: 10, flex: 0.5 }}>
                                            <Text style={{ fontSize: 18, marginBottom: 5 }}>Nombre</Text>
                                            <TextInput style={{ width: '100%', paddingHorizontal: 5, height: 40, borderRadius: 15, backgroundColor: colors.gray }} />
                                        </View>
                                    </View>
                                </View>

                                <View style={{ marginTop: 30 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Genero</Text>

                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <View style={{ width: '100%', justifyContent: 'center', flex: 0.5, paddingHorizontal: 5, height: 40, borderRadius: 15, backgroundColor: colors.gray }}>
                                            <Text style={{ textAlign: 'center' }}>Male</Text>
                                        </View>
                                        <View style={{ width: 10 }}></View>
                                        <View style={{ width: '100%', justifyContent: 'center', flex: 0.5, paddingHorizontal: 5, height: 40, borderRadius: 15, backgroundColor: colors.gray }}>
                                            <Text style={{ textAlign: 'center' }}>Famale</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={{ marginTop: 30 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Descripcion</Text>

                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <TextInput numberOfLines={4} multiline style={{ width: '100%', paddingHorizontal: 5, height: 70, borderRadius: 15, backgroundColor: colors.gray }} />
                                    </View>
                                </View>

                                <View style={{ marginTop: 30 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Fotos</Text>

                                    <View style={{ flex: 1 }}>
                                        <TouchableOpacity onPress={fileUri.length <= 3 ? chooseImage : undefined} style={{ paddingHorizontal: 10, backgroundColor: fileUri.length <= 3 ? colors.primary : colors.primaryLight, paddingVertical: 15, borderRadius: 10 }}>
                                            <Text style={{ color: 'white' }}>Select image</Text>
                                        </TouchableOpacity>
                                        <View style={styles.list}>
                                            {fileUri.map(uri => {
                                                return (
                                                    <View key={uri.uri} style={styles.listadoItem}>
                                                        <Image style={styles.mejores} resizeMode='contain' source={{ uri: uri.uri }} />
                                                    </View>
                                                )
                                            })}

                                        </View>

                                    </View>
                                </View>
                            </ScrollView>
                        </View>
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
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    mejores: {
        width: 200,
        height: 100,
        marginVertical: 5
    },
    listadoItem: {
        flexBasis: '49%'
    }
})
export default Home;