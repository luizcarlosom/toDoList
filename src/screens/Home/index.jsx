import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import styles from "./Style"
import { useState } from "react";
import Tasks from "../Tasks/Tasks";
import Done from "../Done/Done";

export default function Home() {
    const [input, setInput] = useState();
    const [tasks, setTasks] = useState([]);

    return (
        <View 
            style={styles.container}>
                <Text
                    style={styles.title}
                >
                    To-Do
                </Text>
                <View
                    style={styles.viewInputAndInsert}
                >
                    <TextInput
                        style={styles.input}
                        placeholder="Insert your task"
                        placeholderTextColor={'#778899'}
                        onChangeText={setInput} 
                    >
                    </TextInput>
                    <TouchableOpacity
                        style={styles.insertButton}
                        onPress={() => {
                            const newTasks = [...tasks, input];
                            setTasks(newTasks);
                        }}
                    >
                        <Text
                            style={styles.insertText}
                        >
                            Insert
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {tasks.map((element,index) => {
                        return (
                            <View
                                style={styles.viewTasksAndRemove}
                                key={index}
                            >
                                <Done />
                                <Tasks
                                    style={styles.tasks} 
                                    task={element} 
                                />
                                <TouchableOpacity 
                                    style={styles.buttonRemove}
                                    onPress={() => {
                                        const updatedTasks = [...tasks];
                                        updatedTasks.splice(index, 1);
                                        setTasks(updatedTasks);
                                    }}
                                >
                                    <Text
                                        style={styles.textButtonRemove}
                                    >
                                        -
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </ScrollView>
        </View>
    )
}