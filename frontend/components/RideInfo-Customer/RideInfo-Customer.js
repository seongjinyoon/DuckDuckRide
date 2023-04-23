import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import Map from '../Map/Map';
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';

const RideInfoC = ({ route }) => {
    return (
        <SafeAreaView>
            <View>
                {/* <Text>This is the RideInfo-Customer page</Text> */}
                <View style={tw`h-80%`}>
                    <Map />
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
