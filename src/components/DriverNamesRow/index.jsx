import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons'

const DriverNamesRow = (props) => {
    
    const {type} = props;

    const getImage = () => {
        if (type.type === 'UberX'){
            return require('../../assets/images/UberX.jpeg');
        }
        if (type.type === 'Comfort'){
            return require('../../assets/images/Comfort.jpeg');
        }
        return require('../../assets/images/UberXL.jpeg');
    }
    
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image style={styles.image} source={getImage()} />

            {/* Name of Drivers */}
            <View style={styles.middleContainer}>
                <Text style={styles.drivers}>
                    {type.type} {' '}
                    <Ionicons names={'person'} size={16}></Ionicons>
                    3
                </Text>
                <Text style={styles.time}>
                    {type.duration} mins. until arrival
                </Text>
            </View>

            {/* Price */}
            <View style={styles.rightContainer}>
                <Ionicons name={'pricetag'} size={18} color={'#00ff00'} />
                <Text style={styles.price}>
                    est. ₱ {type.price}
                </Text>
            </View>
        </View>
    );
}

export default DriverNamesRow;
