import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { colors } from '../utils/index'

const { CHARCOAL } = colors;

import Car from './Car';

const CarContainer = ({ cars }) => {

    const renderItem = ({item}) => (
        <Car car={item}/>
    )

    return(
        <View style={styles.carsList}>
          <Text style={styles.text}>{cars.length} results found:</Text>
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
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: CHARCOAL,
    fontWeight: '500',
    marginBottom: 5
  },
  });
  

export default CarContainer;