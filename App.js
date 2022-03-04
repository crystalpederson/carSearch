import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { colors } from './utils/index'

const { BORDER_COLOR } = colors; 

import CarContainer from './components/CarContainer';
import SearchBar from './components/SearchBar';

export default function App() {
  const [cars, setCars] = useState([]);
  const [make, setMake] = useState('Honda');
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getCars();
  }, [make])

  async function getCars() {
    setCars(null)
    setErrorMessage(null)
    try {
      const response = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`);
      const carsArray = response.data.Results;
      setCars(carsArray)
    } catch (error) {
      console.error(error);
      setErrorMessage('No cars found')
    }
  }

  if(cars){
    return(
      <View style={styles.container}>
        <StatusBar style="auto" />
        <SafeAreaView>
          <Text>Search for a car!</Text>
          <Text>{cars.length} results: </Text>
          <SearchBar setMake={setMake} getCars={getCars}/>
          <Text>You searched for: {make}</Text>
          <CarContainer cars={cars}/>
        </SafeAreaView>
      </View>        
    )
  }
  else if(errorMessage){
    return(
      <View style={styles.container}>
        <Text style={{ textAlign: 'center'}}>{errorMessage}</Text>
        <StatusBar style="auto" />
     </View>
    )
  }
  else{
    return(
      <View style={styles.container}>
      <ActivityIndicator size='large'/>
      <StatusBar style="auto" />
   </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carsList: {
    margin: 10,
  }
});
