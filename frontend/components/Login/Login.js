import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import NavOptions from '../NavOptions/NavOptions';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    const [text, onChangeText] = React.useState('Username');
    const [number, onChangeNumber] = React.useState('');

    const createUser = async (userName, passWord) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: userName,
                    password: passWord
                }),
            });
            const json = await response.json();
            if (json) {
                if (!json.ok) console.error('Server Error!');
                else {
                    navigation.navigate('Main', { userId: json.id })
                }
            }
            else {
                console.error('Empty response body');
            }
        }
        catch (error) {
            console.error(error);

        }
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* LOGO */}
            <Image
                style={{ height: 50, width: 50, resizeMode: 'contain' }}
                source={
                    require('../../assets/logo.jpeg')
                }
            />
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
            <View style={{ ...styles.container2 }}>
                <TouchableOpacity
                    onPress={async () => {
                        await createUser(text, number);
                    }}
                >
                    <View>
                        <Text style={styles.text}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Image
                style={{ height: '100%', width: '100%', resizeMode: 'contain', flex: 1, justifyContent: 'center', alignContent: 'center' }}
                source={
                    require('../../assets/background.png')
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        zIndex: 999,

    },
    container2: {
        // backgroundColor: '#fff',
        zIndex: 999,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        paddingLeft: 15,
        fontSize: 24
    }
});

export default Login;
