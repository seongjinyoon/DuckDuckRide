import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
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
