import { FlatList, StyleSheet, Button, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const NavOptions = ({ userId }) => {
    const navigation = useNavigation();
    const findRide = () => {
        // Handle button 1 press here
    };

    const shareRide = () => {
        // Handle button 2 press here
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Setup', {userId})}
                style={{ marginRight: 50, marginLeft: 30, ...styles.container }}
            // onPress={findRide}
            >
                <View>
                    <Image
                        source={require('../../assets/findRideIcon.png')}
                        style={styles.img}
                    />
                    <Text style={styles.text}>Find Ride</Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('SetupDriver', {userId})}
                style={{ ...styles.container }}
            // onPress={shareRide}
            >
                <View>
                    <Image
                        source={require('../../assets/shareRideIcon.png')}
                        style={styles.img}
                    />
                    <Text style={styles.text}>Share Ride</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default NavOptions

const styles = StyleSheet.create({
    container: {
        padding: 2,
        paddingLeft: 6,
        paddingBottom: 8,
        paddingTop: 4,
        backgroundColor: '#edf2f7',
        width: 100,
        height: 100
    },

    text: {
        marginTop: 8,
        fontWeight: 600,
    },

    img: {
        width: 100,
        height: 100
    }
})