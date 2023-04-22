import { FlatList, StyleSheet, Button, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const NavOptions = () => {
    const findRide = () => {
        // Handle button 1 press here
    };

    const shareRide = () => {
        // Handle button 2 press here
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                style={{ width: 70, height: 70, marginRight: 60, marginLeft: 20 }}
                onPress={findRide}
            >
                <Image
                    source={require('../../assets/findRideIcon.png')}
                    style={{ width: 100, height: 100 }}
                />
                <Text>Find Ride</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: 70, height: 70 }}
                onPress={shareRide}
            >
                <Image
                    source={require('../../assets/shareRideIcon.png')}
                    style={{ width: 100, height: 100 }}
                />
                <Text>Share Ride</Text>
            </TouchableOpacity>
        </View>
    );
}

export default NavOptions

const styles = StyleSheet.create({})