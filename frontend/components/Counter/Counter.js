import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        if (count < 4) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 24 }}>Count: {count}</Text>
            <TouchableOpacity onPress={handleIncrement}>
                <Text style={{ fontSize: 24 }}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDecrement}>
                <Text style={{ fontSize: 24 }}>-</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Counter;
