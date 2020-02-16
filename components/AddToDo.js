import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddToDo({ onAdd }) {
    const [task, setTask] = useState("");

    const handlerChangeText = (enteredText) => {
        setTask(enteredText);
    }

    const handlerSubmit = () => {
        onAdd(task);
        setTask("");
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="New task..."
                onChangeText={handlerChangeText}
                value={task}
            />
            <Button onPress={handlerSubmit} title="Add Task" color='coral' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});
