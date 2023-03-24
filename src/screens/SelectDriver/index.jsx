import React from 'react';
import {View, StyleSheet, Text, Dimensions, SafeAreaView} from 'react-native';

import RouteMap from '../../components/RouteMap';
import DriverNames from '../../components/DriverNames';

import { useRoute } from '@react-navigation/native'


const SelectDriver = (data) => {
    const route = useRoute();

    console.log(route.params);

    return (
        <SafeAreaView>
        <View style={{display:'flex'}}>
            <View style={{height: Dimensions.get('window').height - 400}}>
             <RouteMap />
            </View>
            
            <View style={{height: 400}}>
             <DriverNames /> 
            </View>
            
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default SelectDriver;
