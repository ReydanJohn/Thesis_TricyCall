import { Text } from '@rneui/base';
import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const HomeSearch = () => {
    const navigation = useNavigation();
    const goToSearch = () => {
    navigation.navigate('DestinationSearch')
     }
    return (
        <View>
            {/* Input Box */}
            <Pressable style={styles.inputBox} onPress={goToSearch}>
                <Text style={styles.inputText}>Where to?</Text>
                <View style={styles.timeContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
                    <Text>Now</Text>
                    <MaterialIcons name={'keyboard-arrow-down'} size={16} color={'#535353'} />
                </View>
            </Pressable>
            {/* Prev Destination */}
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#fff'} />
                </View>
                <Text style={styles.destinationText}>Technological University of the Philippines - Manila</Text>
            </View>
            {/* Home Destination */}
            <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
                    <Entypo name={'home'} size={16} color={'#fff'} />
                </View>
                <Text style={styles.destinationText}>Home</Text>
            </View>
        </View>
    );
}

export default HomeSearch;
