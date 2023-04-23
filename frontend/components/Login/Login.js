import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import NavOptions from '../NavOptions/NavOptions';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    const [text, onChangeText] = React.useState('Username');
    const [number, onChangeNumber] = React.useState('');

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Password"
                keyboardType="numeric"
                secureTextEntry={true}
            />
            <TouchableOpacity
                onPress={async () => {
                    navigation.navigate('Main')
                }}
                style={{ ...styles.container }}
            >
                <View>
                    <Text style={styles.text}>Login</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        paddingLeft: 15,
    }
});

export default Login;