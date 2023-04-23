import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import NavOptions from '../NavOptions/NavOptions';
import { useNavigation } from '@react-navigation/native';

const RiderList = ({ route }) => {
    // const { lat1 } = route.lat1;
    // const { lon1 } = route.lon1;
    // const { lat2 } = route.lat2;
    // const { lon2 } = route.lon2;
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={{ padding: 5 }}>
                <Text>This is the RiderList page</Text>
                {/* <Text>{lat1}</Text>
                <Text>{lon1}</Text>
                <Text>{lat2}</Text>
                <Text>{lon2}</Text> */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('RideInfo-Customer')}
                    style={{ ...styles.container }}
                >
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
    // text: {
    //     color: 'blue',
    // },
})
