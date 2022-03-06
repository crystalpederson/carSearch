import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native'

import Car from './Car';

const CarContainer = ({ cars }) => {

    const renderItem = ({item}) => (
        <Car car={item}/>
    )

    return(
        <View style={styles.carsList}>
          <Text>{cars.length} results found:</Text>
          <FlatList
            data={cars}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    carsList: {
      flex: 1,
      margin: 5,
      marginTop: 2
    },
  });
  

export default CarContainer;