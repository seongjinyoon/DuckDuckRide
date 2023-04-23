import { FlatList, StyleSheet, Button, Text, View, TouchableOpacity, Image } from 'react-native';

import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useNavigation } from '@react-navigation/native';

const TripInfo = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: 'column' }}>
            <GooglePlacesAutocomplete
                placeholder="From"
                styles={{
                    container: {
                        flex: 0,
                        width: '100%',
                    },
                    textInput: {
                        fontSize: 18,
                    }
                }}
                onPress={(data, details = null) => {
                    console.log(data);
                    console.log(details);
                }}
                fetchDetails={true}
                returnKeyType={'search'}
                minLength={2}
                enablePoweredByContainer={false}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en'
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
            />
            <GooglePlacesAutocomplete
                placeholder="To"
                styles={{
                    container: {
                        flex: 0,
                        width: '100%',
                    },
                    textInput: {
                        fontSize: 18,
                    }
                }}
                onPress={(data, details = null) => {
                    console.log(data);
                    console.log(details);
                }}
                fetchDetails={true}
                returnKeyType={'search'}
                minLength={2}
                enablePoweredByContainer={false}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en'
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
            />

            <TouchableOpacity
                onPress={() => navigation.navigate('RiderList')}
                style={{ ...styles.container }}
            >
                <View>
                    <Text style={styles.text}>Continue</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default TripInfo

const styles = StyleSheet.create({
    TouchableOpacity: {
        width: 50,
        height: 50
    }
})