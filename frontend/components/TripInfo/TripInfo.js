import { FlatList, StyleSheet, Button, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import DatePick from '../DatePick/DatePick';

const TripInfo = () => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <GooglePlacesAutocomplete
                placeholder="From"
                styles={{
                    container: {
                        flex: 0,
                        width: '100 %'

                    },
                    textInput: {
                        fontSize: 18,
                    }
                }}
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
                        width: '100 %'

                    },
                    textInput: {
                        fontSize: 18,
                    }
                }}
                // query={{
                //     key: GOOGLE_MAPS_APIKEY,
                //     language: 'en'
                // }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
            />
            <DatePick />
            <TouchableOpacity
                // onPress={() => navigation.navigate('Setup')}
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