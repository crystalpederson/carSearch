import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Car from './components/Car';

export default function App() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    getCars();
  }, [])

  async function getCars() {
    try {
      const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json');
      const carsArray = response.data.Results;
      setCars(carsArray)
    } catch (error) {
      console.error(error);
    }
  }

  const renderItem = ({item}) => (
    <Car car={item}/>
  )

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Search for a car!</Text>
        <Text>{cars.length} results: </Text>
        <View style={styles.carsList}>
          <FlatList
            data={cars}
            renderItem={renderItem}
            keyExtractor={car => car.Model_ID}
          />
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carsList: {
    margin: 10,
  }
});
