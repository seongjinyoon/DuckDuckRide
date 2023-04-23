import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import Map from '../Map/Map';
import Card from '../Card/Card';
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';

const RideInfoC = ({ route }) => {
    return (
        <SafeAreaView>
            <View style>
                {/* <Text>This is the RideInfo-Customer page</Text> */}
                <View style={tw`h-70%`}>
                    <Map />
                </View >
                <View>
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
