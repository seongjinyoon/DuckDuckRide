import React from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import Map from '../Map/Map';
import Card from '../Card/Card';
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';

const RideInfoC = () => {
    const route = useRoute();
    const { selectedItem } = route.params;
    console.log(selectedItem); // null or selected item
    let geoList = [{}];

    const queryRideData = async () => {
        try {
            const queryParams = new URLSearchParams({
                ridedistance: true,
                id: selectedItem._id,
            });
            const response = await fetch(`http://localhost:8000/api/ride?${queryParams.toString()}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            geoList = [json.stLat, json.stLon, json.enLat, json.enLon];
            if (!json) {
                console.error("Failed to fetch rider list data");
            }
        } catch (error) {
            console.log(error);
        }
    };

    if (selectedItem) queryRideData();

    return (
        <SafeAreaView>
            <View style={styles.container}>
                {/* <Text>This is the RideInfo-Customer page</Text> */}
                <View style={tw`h-1/2`}>
                    <Map geoList={geoList} numPpl={geoList[0].length} />
                </View >
                <View style={tw`h-1/2`}>
                    <Card />
                </View>

                {/* <View style={styles.container}> </View> */}
            </View>
        </SafeAreaView >
    )
}

export default RideInfoC;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white',
        //     position: 'absolute',
        //     top: '50%',
        //     width: '100 %',
        // transform: 'translateY(-50 %)'
    }
})
