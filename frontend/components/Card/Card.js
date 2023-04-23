import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const OptionCard = ({ title, icon1, icon2, icon3, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon name={icon1} size={30} style={styles.icon} />
                <Icon name={icon2} size={30} style={styles.icon} />
                <Icon name={icon3} size={30} style={styles.icon} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        flex: 1,
        borderRadius: 10,
        padding: 20,
        margin: 10,
        elevation: 5,
    },
    titleContainer: {
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        color: '#000',
    },
});

export default OptionCard;
