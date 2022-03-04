import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Car = ({ car }) => {
    const { Make_Name, Model_Name} = car;
    return(
        <View style={styles.carInfoContainer}>
            <Text>{Make_Name}</Text>
            <Text>{Model_Name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    carInfoContainer:{
        borderWidth: 1,
        margin: 2,
    }
  });
  

export default Car;