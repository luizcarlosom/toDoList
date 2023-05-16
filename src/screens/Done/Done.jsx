import { TouchableOpacity, View, Text } from "react-native";
import { useState } from "react";

export default function Done(props) {
    const [color, setColor] = useState('#fff');
    const [warning, setWarning] = useState('In progress');

    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity 
                style={{
                    backgroundColor: color,
                    width: 20,
                    height: 20,
                    marginRight: 10
                }}
                onPress={() => {
                    if(color == '#fff'){
                        setColor('#008000');
                        setWarning('Completed');
                    }else{
                        setColor('#fff');
                        setWarning('In progress');
                    }
                    
                }}
            />
            <Text
                style={{
                    fontSize: 10
                }}
            >
                {warning}
            </Text>
        </View>
    )
}