import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import NavOptions from '../NavOptions/NavOptions';

const RideInfoC = ({ route }) => {
    // const { lat1 } = route.lat1;
    // const { lon1 } = route.lon1;
    // const { lat2 } = route.lat2;
    // const { lon2 } = route.lon2;

    return (
        <SafeAreaView>
            <View style={{ padding: 5 }}>
                <Text>This is the RideInfo-Customer page</Text>
                {/* <Text>{lat1}</Text>
                <Text>{lon1}</Text>
                <Text>{lat2}</Text>
                <Text>{lon2}</Text> */}
            </View>
        </SafeAreaView>
    )
}

export default RideInfoC;

const styles = StyleSheet.create({
    // text: {
    //     color: 'blue',
    // },
})
