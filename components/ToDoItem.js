import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function ToDoItem({ item, pressHandler }) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color='#333' />
                <Text style={styles.text}>{item.text}</Text>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        //flex: 1,
        //backgroundColor: 'coral',
        //height: 80,
        //paddingTop: 38,


        //alignItems: 'center',
        //justifyContent: 'center',
        paddingLeft: 5,

    },
    item: {
        //textAlign: 'center',
        //color: 'white',
        //fontSize: 20,
        //fontWeight: 'bold',

        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        //paddingRight: 10,
    },
});
