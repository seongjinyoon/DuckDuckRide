import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

const Card = () => {
    return (
        <View>
            <Text style={styles.txt}>24.7 miles / $19.00</Text>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../../assets/one.png')} style={styles.image} />
                        <Text>Driver</Text>
                    </TouchableOpacity>
                    <View style={styles.spacer} />
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../../assets/two.png')} style={styles.image} />
                        <Text>Vehicle</Text>
                    </TouchableOpacity>
                    <View style={styles.spacer} />
                    <TouchableOpacity style={styles.button}>
                        <Text>3/4</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    txt: {
        padding: 20,
        textAlign: 'center',
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'row',
    },
    container: {
        // flex: 1,
        // justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: '50%',
        fontWeight: 600,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    button: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'white',
        borderColor: 'white',
        // backgroundColor: '#ded6d5',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        // borderColor: '#bab0af',
    },
    spacer: {
        width: 40,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        // resizeMode: 'contain',
        // width: 50,
        // height: 50,
        marginBottom: 5,
    },
});

export default Card;
