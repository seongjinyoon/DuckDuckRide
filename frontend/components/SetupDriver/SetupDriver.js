import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import NavOptions from '../NavOptions/NavOptions';
import TripInfo from '../TripInfo/TripInfo';
import Counter from '../Counter/Counter';
import { useNavigation } from '@react-navigation/native';


const SetupDriver = () => {
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
                <TripInfo role='driver' />
                <Counter />
            </View>

        </SafeAreaView>
    )
}

export default SetupDriver;

const styles = StyleSheet.create({
    // text: {
    //     color: 'blue',
    // },
})
