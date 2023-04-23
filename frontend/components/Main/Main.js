import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import NavOptions from '../NavOptions/NavOptions';

const Main = () => {
    const route = useRoute();
    const { userId } = route.params;
    // console.log(`Main page: ${userId}`);
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
                <NavOptions userId={userId}/>
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
