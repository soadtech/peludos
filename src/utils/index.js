import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorage = async storage_key => {
    try {
        const jsonValue = await AsyncStorage.getItem(storage_key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        return e
        // error reading value
    }
}