import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '@env';
const Map = () => {
    const origin = { latitude: 33.642480, longitude: -117.823980 };
    const destination = { latitude: 33.683020, longitude: -117.841430 };
    const mapRef = useRef(null);

    useEffect(() => {
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 50, left: 50, right: 50, bottom: 50 }
        })
    })
    return (
        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            mapType='mutedStandard'
            initialRegion={{
                latitude: origin.latitude,
                longitude: destination.longitude,
                // latitudeDelta: 0.0922,
                // longitudeDelta: 0.0421,
            }}
        >
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor='black'
            />

            <Marker
                coordinate={{
                    latitude: origin.latitude,
                    longitude: origin.longitude
                }}
                title='Origin'
                identifier='origin'
            />
            <Marker
                coordinate={{
                    latitude: destination.latitude,
                    longitude: destination.longitude
                }}
                title='Destination'
                identifier='destination'
            />
        </MapView>


    )
}

export default Map

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})