import React from 'react';
import {View, StyleSheet, Text, Dimensions, SafeAreaView} from 'react-native';

import HomeMap from '../../components/HomeMap';
import MessageBox from '../../components/MessageBox';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = () => {
    return (
        <SafeAreaView>
        <View>
            <View style={{height: Dimensions.get('window').height - 400}} >
                <HomeMap />
            </View>
            {/* Message Box Component */}
            <MessageBox />
            {/* Search Component */}
            <HomeSearch />
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
