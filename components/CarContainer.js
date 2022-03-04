import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native'

import Car from './Car';

const CarContainer = ({ cars }) => {

    const renderItem = ({item}) => (
        <Car car={item}/>
    )

    return(
        <View style={styles.carsList}>
          <FlatList
            data={cars}
            renderItem={renderItem}
            keyExtractor={car => car.Model_Name}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    carsList: {
        margin: 10,
    }
  });
  

export default CarContainer;