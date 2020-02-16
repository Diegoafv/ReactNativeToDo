import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SandBox() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sandbox</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: '#ddd',
        height: 80,
        paddingTop: 40,
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
