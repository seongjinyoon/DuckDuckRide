import React from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import NavOptions from '../NavOptions/NavOptions';
import TripInfo from '../TripInfo/TripInfo';


const Setup = () => {
    const route = useRoute();
    const { userId } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ padding: 5 }}>
                <Image
                    style={{ height: 50, width: 50, resizeMode: 'contain' }}
                    source={
                        require('../../assets/logo.jpeg')
                    }
                />
                <TripInfo role='passenger' userId={userId} />

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default Setup;
