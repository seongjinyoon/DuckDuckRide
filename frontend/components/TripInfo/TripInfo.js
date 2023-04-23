import { FlatList, StyleSheet, Button, Text, View, TouchableOpacity, Image } from 'react-native';

import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useNavigation } from '@react-navigation/native';

const TripInfo = () => {
    const [data, setData] = useState(null);
    const [startData, setStartData] = useState(null);
    const [endData, setEndData] = useState(null);

    const navigation = useNavigation();
    const createRide = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000',{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                ...startData,
                ...endData,
              }),
      
            });
            const json = await response.json();
            if (json){
              setData(json);
            }
            else {
              console.error('Empty response body');
            }
        } catch (error) {
            console.error(error);
        }
    }

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
                    setStartData({
                        stLat: details.geometry.location.lat,
                        stLon: details.geometry.location.lng
                    });
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
                    setEndData({
                        enLat: details.geometry.location.lat,
                        enLon: details.geometry.location.lng,
                    });
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
                onPress={async () =>{
                    await createRide();
                    navigation.navigate('RiderList')
                }}
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