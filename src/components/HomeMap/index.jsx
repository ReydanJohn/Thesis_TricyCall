import React from 'react';
import {View, StyleSheet, Text, Image, FlatList} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import cars from '../../assets/data/cars'

const HomeMap = () => {
    
    const getImage = (type) => {
        if (type === 'UberX'){
            return require('../../assets/images/top-UberX.png');
        }
        if (type === 'Comfort'){
            return require('../../assets/images/top-Comfort.png');
        }
        return require('../../assets/images/top-UberXL.png');
    }

    return (
        <View>
              <MapView
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                    showsUserLocation={true}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                    latitude: 14.5873682,
                    longitude: 120.984471218323,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}>
                    {cars.map((car) => (
                        <Marker
                        key={car.id}
                        coordinate={{ latitude : car.latitude , longitude : car.longitude}}
                        >
                        <Image 
                        style={{
                            width: 40, 
                            height: 40, 
                            resizeMode: 'contain',
                            transform: [{
                                rotate: `${car.heading}deg`
                            }]
                        }} 
                        source={getImage(car.type)} 
                        />
                        </Marker>
                    ))}
              </MapView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default HomeMap;
