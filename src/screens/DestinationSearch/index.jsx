import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TextInput, SafeAreaView} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
import PlacesRow from './PlacesRow';
import styles from './styles';


navigator.geolocation = require('@react-native-community/geolocation');

const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };

const DestinationSearch = () => {
    const navigation = useNavigation();
    const [OriginPlace, setOriginPlace] = useState(null);
    const [DestinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        //console.warn('useEffect is Called');
        if (OriginPlace && DestinationPlace) {
            //console.warn('Redirect to Result');
            navigation.navigate('SelectDriver', {
                OriginPlace,
                DestinationPlace,
            })
        }
    }, [OriginPlace,DestinationPlace]);

    Geolocation.getCurrentPosition(info => console.log(info));

    return (
        <SafeAreaView>
        <View style={styles.container}>

            <GooglePlacesAutocomplete
                placeholder='From'
                onPress={(data, details = null) => {
                    setOriginPlace({data,details});
                }}
                enablePoweredByContainer={false}
                suppressDefaultStyles
                currentLocation={true}
                currentLocationLabel='Current location'
                styles={{
                    textInput: styles.textInput,
                    container: styles.autoCompleteContainer,
                    listView: styles.listView,
                    separator: styles.separator,
                }}
                query={{
                    key: 'AIzaSyDTvRr4UPuSqsyMNBBW6DpmGb0g0JMlhx4',
                    language: 'en',
                }}
                renderRow={(data) => <PlacesRow data={data} />}
                renderDescription={(data)=> data.description || data.vicinity}
                predefinedPlaces={[homePlace, workPlace]}
            />

            <GooglePlacesAutocomplete
                placeholder='Destination :'
                onPress={(data, details = null) => {
                    setDestinationPlace({data,details});
                }}
                suppressDefaultStyles
                enablePoweredByContainer={false}
                styles={{
                    textInput: styles.textInput,
                    container:{
                        ...styles.autoCompleteContainer,
                        top: 55,
                    },
                    separator: styles.separator,
                }}
                query={{
                    key: 'AIzaSyDTvRr4UPuSqsyMNBBW6DpmGb0g0JMlhx4',
                    language: 'en',
                }}
                renderRow={(data) => <PlacesRow data={data} />}
                renderDescription={(data)=> data.description || data.vicinity}
            />
            {/* Straight vertical line */}
            <View style={styles.line}></View>

            {/* Circle in Origin input */}
            <View style={styles.circle}></View>

            {/* Square in Destination input */}
            <View style={styles.square}></View>
        </View>
        </SafeAreaView>
    );
}

export default DestinationSearch;
