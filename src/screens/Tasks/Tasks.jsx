import { View, Text } from "react-native";
import styles from "./Style";

export default function Tasks(props) {
    
    const { task } = props;

    return (
        <View
            style={styles.viwerTasks}
        >
            <Text 
                style={styles.tasks}
            >
                {task}
            </Text>
        </View>
    )
}