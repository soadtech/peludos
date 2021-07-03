import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Header from '../../components/Header';
import BoxPets from '../../components/BoxPets'

const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header />
                <View style={{ marginTop: 20 }}>
                    <BoxPets />
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
        paddingVertical: 18,
    }
})
export default Home;