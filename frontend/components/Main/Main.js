import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import NavOptions from '../NavOptions/NavOptions';

const Mainpage = () => {
    return (
        <SafeAreaView>
            <View style={{ padding: 5 }}>
                <Image
                    style={{ height: 100, width: 100, resizeMode: 'contain' }}
                    source={
                        require('../../assets/logo.jpeg')
                    }
                />
                <NavOptions />
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
