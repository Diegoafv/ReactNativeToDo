import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Alert,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import AddToDo from './components/AddToDo';

export default function App() {

    const [toDos, setToDos] = useState([
        { text: 'buy coffee', key: '1' },
        { text: 'create an app', key: '2' },
        { text: 'play on the switch', key: '3' }
    ]);

    const pressHandler = (key) => {
        let newToDos = deleteElement(key);
        setToDos(newToDos);
    }

    const deleteElement = (key) => {
        return toDos.filter(todo => todo.key != key);
    }

    const addElement = (task) => {
        if (task.length > 2) {
            setToDos([{ text: task, key: Math.random().toString() }, ...toDos]);
        } else {
            Alert.alert('Oops!', 'Tasks must be over 2 characteres long.', [{ text: 'Understood', onPress: () => console.log('alert closed') }]);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddToDo onAdd={addElement} />
                    <View style={styles.list}>
                        <FlatList
                            data={toDos}
                            renderItem={({ item }) => (
                                <ToDoItem item={item} pressHandler={pressHandler} />
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    content: {
        flex: 1,
        padding: 40,
    },
    list: {
        marginTop: 20,
        flex: 1,
    }
});
