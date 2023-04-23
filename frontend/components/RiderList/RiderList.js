import React, {useState} from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import NavOptions from '../NavOptions/NavOptions';
import { useNavigation, useRoute } from '@react-navigation/native';



const RiderList = () => {
    const route = useRoute();
    const { riderListData } = route.params;
    const [selectedItem, setSelectedItem] = useState(null);
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                setSelectedItem(item);
                navigation.navigate('RideInfo-Customer', { selectedItem: item });
            }}
        >
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{`${item._id}`}</Text>
        </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView>
            <View style={{ padding: 5 }}>
                <FlatList
                    data={riderListData} // Pass the data array
                    renderItem={renderItem} // Pass the renderItem function
                    keyExtractor={(item) => item._id} // Provide a unique key for each item
                />
            </View>
        </SafeAreaView>
    )
}

export default RiderList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', // Set the background color to white
        paddingTop: 20,
    },
    itemContainer: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
    },
    itemText: {
        fontSize: 16,
    },
    container2: {
        // backgroundColor: '#fff',
        zIndex: 999,
        backgroundColor: 'white',
        borderRadius: 10,
        fontWeight: 600,
        height: 50
    },
    text: {
        paddingLeft: 15,
        fontSize: 24
    }
});
