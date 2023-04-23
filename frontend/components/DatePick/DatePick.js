import { FlatList, StyleSheet, Button, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import DatePicker from 'react-native-date-ranges';

<DatePicker
    style={{ width: 350, height: 45 }}
    customStyles={{
        placeholderText: { fontSize: 20 }, // placeHolder style
        headerStyle: {},			// title container style
        headerMarkTitle: {}, // title mark style 
        headerDateTitle: {}, // title Date style
        contentInput: {}, //content text container style
        contentText: {}, //after selected text Style
    }} // optional 
    centerAlign // optional text will align center or not
    allowFontScaling={false} // optional
    placeholder={'Apr 27, 2023 → Jul 10, 2023'}
    mode={'range'}
/>

export default class DatePick extends React.Component {
    customButton = (onConfirm) => (
        <Button
            onPress={onConfirm}
            style={{ container: { width: '80%', marginHorizontal: '3%' }, text: { fontSize: 20 } }}
            primary
            text={'hello world'}
            title="Confirm"
        />
    )

    render() {
        const {
            ...rest
        } = this.props;
        return (
            <View>
                <DatePicker
                    ref={(ref) => this.picker = ref}
                    {...rest}
                    customButton={this.customButton}
                />
                <DatePicker
                    ref={(ref) => this.picker = ref}
                    {...rest}
                    customButton={this.customButton}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

})