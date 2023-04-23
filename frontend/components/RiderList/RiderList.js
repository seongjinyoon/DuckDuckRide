import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import NavOptions from '../NavOptions/NavOptions';
import { useNavigation, useRoute} from '@react-navigation/native';

const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.driverId}</Text>
    </View>
);

const RiderList = () => {
    const route = useRoute();
    const { riderListData } = route.params;
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={{ padding: 5 }}>
                <FlatList
                    data={riderListData} // Pass the data array
                    renderItem={renderItem} // Pass the renderItem function
                    keyExtractor={(item) => item._id} // Provide a unique key for each item
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('RideInfo-Customer')}
                    style={{ ...styles.container }}>
                    <View>
                        <Text style={styles.text}>Continue</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RiderList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
});
