import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils/index'

const { SECONDARY_COLOR } = colors; 

const Car = ({ car }) => {
    const { Make_Name, Model_Name, Model_Year} = car;
    return(
        <View style={styles.carInfoContainer}>
            {Model_Year && <Text>{Model_Year}</Text>}
            <Text>{Make_Name}</Text>
            <Text>{Model_Name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    carInfoContainer:{
        borderWidth: 1,
        borderColor: SECONDARY_COLOR,
        margin: 2,
    }
  });
  

export default Car;