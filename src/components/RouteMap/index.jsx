import React from 'react';
import {View, StyleSheet, Text, Image, } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyDTvRr4UPuSqsyMNBBW6DpmGb0g0JMlhx4';

const RouteMap = () => {

    const origin = {
        latitude: 14.5873682,
        longitude: 120.984471218323,
    };

    const destination = {
        latitude: 14.5646,
        longitude: 121.0364
    }

    return (
        <View>
              <MapView
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                    showsUserLocation={true}
                    initialRegion={{
                    latitude: 14.5873682,
                    longitude: 120.984471218323,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}>
                  <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="red"
                   />
                   <Marker
                    coordinate={origin}
                    title={'origin'}
                    />
                    <Marker
                    coordinate={destination}
                    title={'destination'}
                    />
              </MapView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default RouteMap;
