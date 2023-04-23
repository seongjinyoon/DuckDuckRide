import React from 'react';
import {useRoute} from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import Map from '../Map/Map';
import Card from '../Card/Card';
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';

const RideInfoC = () => {
    const route = useRoute();
    const { selectedItem } = route.params;
    console.log(selectedItem);
    return (
        <SafeAreaView>
            <View style>
                {/* <Text>This is the RideInfo-Customer page</Text> */}
                <View style={tw`h-1/2`}>
                    <Map />
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
    // container: {
    //     position: 'absolute',
    //     top: '50%',
    //     width: '100 %',
    // transform: 'translateY(-50 %)'
    // }
})
