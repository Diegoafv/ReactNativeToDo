import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Tasks</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        //flex: 1,
        backgroundColor: 'coral',
        height: 80,
        paddingTop: Platform.OS === 'ios' ? 45 : 38,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
});
