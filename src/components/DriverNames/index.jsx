import React from 'react';
import {View, Pressable, Text} from 'react-native';

import styles from './styles';
import DriverNamesRow from '../DriverNamesRow';

import driversData from '../../assets/data/drivers';

const DriverNames = () => {

    const confirm = () => {
        console.warn('confirm');
    }

    return (
        <View>
            {driversData.map(type => 
                <DriverNamesRow type={type} key={type.id} />
            )}
            
            <Pressable onPress={confirm} style={{
                margin: 10,
                backgroundColor: 'black',
                padding: 10,
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold'
                }}>
                    Confirm Driver
                </Text>
            </Pressable>
        </View>
    );
}

export default DriverNames;
