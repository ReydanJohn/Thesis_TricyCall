import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo'
import styles from './styles';

const PlacesRow = ({data}) => {
    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
            
            {data.description === 'Home'
                ? <Entypo name='home' size={20} color={'white'} /> 
                : <Entypo name='location-pin' size={20} color={'white'} />
            }
            </View>
            <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
        </View>
    );
}

export default PlacesRow;
