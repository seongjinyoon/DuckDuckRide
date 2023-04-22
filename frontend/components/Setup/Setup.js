import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import NavOptions from '../NavOptions/NavOptions';
import TripInfo from '../TripInfo/TripInfo';

const Mainpage = () => {
    return (
        <SafeAreaView>
            <View style={{ padding: 5 }}>
                <Image
                    style={{ height: 50, width: 50, resizeMode: 'contain' }}
                    source={
                        require('../../assets/logo.jpeg')
                    }
                />
                <Text>Hello world</Text>
                <TripInfo />
            </View>

        </SafeAreaView>
    )
}

export default Mainpage;

const styles = StyleSheet.create({
    // text: {
    //     color: 'blue',
    // },
})
