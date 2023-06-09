import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        height: 70,
        width: 70,
        resizeMode: 'contain',

    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
        marginBottom: 5,
    },
    drivers: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    time: {
        color: '#5d5d5d'
    },
    rightContainer: {
        width: 100,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft:5
    }
});

export default styles;
