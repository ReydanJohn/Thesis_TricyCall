import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#e7e7e7',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#535353'
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 90,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 40
    },
    row:{
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#b3b3b3'
    },
    iconContainer:{
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25
    },
    destinationText:{
        marginLeft: 10,
        fontWeight: 600,
        fontSize: 16,
        flexShrink: 1
    }
});

export default styles;
