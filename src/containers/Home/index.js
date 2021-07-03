import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Header from '../../components/Header';
import BoxPets from '../../components/BoxPets'
import CardPet from '../../components/CardPet'

const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header />
                <View style={{ marginTop: 20 }}>
                    <BoxPets />
                </View>
                <View style={{ marginTop: 20 }}>
                    <CardPet img="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" name="Fernando Ropero" time="10" />
                    <CardPet imgPet="https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" img="https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1235&q=80" name="Linda Acosta" time="20" />
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
        paddingVertical: 18,
        backgroundColor: '#f3f3f3'
    }
})
export default Home;