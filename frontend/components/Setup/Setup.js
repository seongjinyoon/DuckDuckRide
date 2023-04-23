import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import NavOptions from '../NavOptions/NavOptions';
import TripInfo from '../TripInfo/TripInfo';
import { useNavigation } from '@react-navigation/native';

const Setup = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={{ padding: 5 }}>
                <Image
                    style={{ height: 50, width: 50, resizeMode: 'contain' }}
                    source={
                        require('../../assets/logo.jpeg')
                    }
                />
                <TripInfo />
                <TouchableOpacity
                    onPress={() => navigation.navigate('RiderList')}
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

export default Setup;

const styles = StyleSheet.create({
    // text: {
    //     color: 'blue',
    // },
})
