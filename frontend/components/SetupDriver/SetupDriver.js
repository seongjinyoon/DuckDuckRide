import React from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import NavOptions from '../NavOptions/NavOptions';
import TripInfo from '../TripInfo/TripInfo';
import Counter from '../Counter/Counter';
import { useNavigation } from '@react-navigation/native';


const SetupDriver = () => {
    const route = useRoute();
    const { userId } = route.params;
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
                <TripInfo role='driver' userId={userId} />
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
