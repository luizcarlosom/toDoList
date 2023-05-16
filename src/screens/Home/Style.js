import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6495ED', 
    },
    title: {
        fontSize: 70,
        textAlign: 'center',
        marginTop: 10,
    },
    viewInputAndInsert: {
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        width: '75%',
        height: 50,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 50,
        margin: 18,
        backgroundColor: '#00BFFF',
        textAlign: 'center'
    },
    insertButton: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 50,
        marginTop: 20,
        padding: 10,
        backgroundColor: '#00BFFF'
    },
    insertText: {
        fontWeight: 'bold'
    },
    viewTasksAndRemove: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    tasks: {

    },
    buttonRemove: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        width: 40,
        borderRadius: 20,
        backgroundColor: '#ff0000',
    },
    textButtonRemove: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default styles;