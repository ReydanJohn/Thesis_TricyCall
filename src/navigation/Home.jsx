import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch';
import SelectDriver from '../screens/SelectDriver';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={"HomeScreen"}
            >
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
                <Stack.Screen name="SelectDriver" component={SelectDriver} />
            </Stack.Navigator>
    );
}

export default HomeNavigator;
