import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import NavOptions from '../NavOptions/NavOptions';

const Main = () => {
    const route = useRoute();
    const { userId } = route.params;
    // console.log(`Main page: ${userId}`);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ padding: 5 }}>
                {/* LOGO */}
                <Image
                    style={{ height: 50, width: 50, resizeMode: 'contain' }}
                    source={
                        require('../../assets/logo.jpeg')
                    }
                />
                {/* RIDE OPTIONS */}
                <NavOptions userId={userId} />
            </View>
            <Image
                style={{ height: '100%', width: '100%', resizeMode: 'contain', flex: 1, justifyContent: 'center', alignContent: 'center' }}
                source={
                    require('../../assets/background.png')
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default Main;
