import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const Card = () => {
    return (
        <View>
            <Text style={styles.txt}>24.7 miles / $19.00</Text>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text>1</Text>
                    </TouchableOpacity>
                    <View style={styles.spacer} />
                    <TouchableOpacity style={styles.button}>
                        <Text>2</Text>
                    </TouchableOpacity>
                    <View style={styles.spacer} />
                    <TouchableOpacity style={styles.button}>
                        <Text>3</Text>
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
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    spacer: {
        width: 40,
    },
});

export default Card;
