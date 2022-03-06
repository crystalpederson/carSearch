import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../utils/index'

const { PRIMARY_COLOR, WHITE } = colors;

const carPhotos = {
  1: require(`../assets/car-photos/car1.jpg`),
  2: require(`../assets/car-photos/car2.jpg`),
  3: require(`../assets/car-photos/car3.jpg`),
  4: require(`../assets/car-photos/car4.jpg`),
  5: require(`../assets/car-photos/car5.jpg`),
  6: require(`../assets/car-photos/car6.jpg`),
  7: require(`../assets/car-photos/car7.jpg`),
  8: require(`../assets/car-photos/car8.jpg`),
}

const getRandomNum = () => {
  return Math.floor(Math.random() * 8) + 1;
}

const Car = ({ car }) => {
    const { Make_Name, Model_Name, Model_Year } = car;
    return(
      <View style={[styles.carContainer, styles.shadow]}>
        <Image
          style={styles.image}
          source={carPhotos[getRandomNum()]}
        />
        <View style={[styles.carInfoContainer, styles.shadow]}>
            {Model_Year && <Text style={styles.year}>{Model_Year}</Text>}
            <Text style={styles.text}>{Make_Name} {Model_Name}</Text>
        </View>        
      </View>

    )
}

const styles = StyleSheet.create({
  carContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
    margin: 10,
    borderRadius: 10
  },
  carInfoContainer:{
    width: '100%',
    margin: 5,
    padding: 10,
  },
  year: {
    fontSize: 16,
    fontWeight: 'bold',
    color: WHITE
  },
  text: {
    fontSize: 20,
    color: WHITE,
    fontWeight: 'bold',
    marginBottom: 2
  },
  image: {
    width: 300, 
    height: 150, 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
    width: 2,
    height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2
},
});
  

export default Car;