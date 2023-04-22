import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

const Mainpage = () => {
    return (
        <SafeAreaView>
            <View style={{ padding: 5 }}>
                <Image
                    style={{ height: 100, width: 100, resizeMode: 'contain' }}
                    source={
                        require('../../assets/logo.jpeg')
                        // uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2F99designs.com%2Finspiration%2Flogos%2Fduck&psig=AOvVaw1tonDxinV4vmNEytMKDRK_&ust=1682221146149000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKispKDIvP4CFQAAAAAdAAAAABAE",
                        // uri: "https://links.papareact.com/gzs",
                    }
                />
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
