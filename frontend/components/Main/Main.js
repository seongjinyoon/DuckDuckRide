import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import NavOptions from '../NavOptions/NavOptions';

const Main = () => {
    return (
        <SafeAreaView>
            <View style={{ padding: 5 }}>
                {/* LOGO */}
                <Image
                    style={{ height: 50, width: 50, resizeMode: 'contain' }}
                    source={
                        require('../../assets/logo.jpeg')
                    }
                />
                {/* RIDE OPTIONS */}
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default Main;

const styles = StyleSheet.create({
    // text: {
    //     color: 'blue',
    // },
})
