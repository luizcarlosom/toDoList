import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viwerTasks: {
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        width: '50%',
        height: 30,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
        backgroundColor: '#00BFFF',
        marginRight: 10
    },
    tasks: {
        textAlign: 'center'
    },
})

export default styles;