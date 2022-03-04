import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { colors } from './utils/index'

const { BORDER_COLOR } = colors; 

import CarContainer from './components/CarContainer';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';

export default function App() {
  const [cars, setCars] = useState([]);
  const [make, setMake] = useState('Honda');
  const [type, setType] = useState('')
  const [year, setYear] = useState('')
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getCars();
  }, [make])

  
  const carMakeUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`
  const makeAndTypeUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/vehicleType/${type}?format=json`
  const makeAndYearUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/modelyear/${year}?format=json`
  const allUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/modelyear/${year}/vehicleType/${type}?format=json`
  let url;

  if(make && type && year){
    url = allUrl
  }else if(make && type){
    url = makeAndTypeUrl
  }else if(make && year){
    url = makeAndYearUrl
  }else{
    url = carMakeUrl
  }
  
  async function getCars() {
    setCars(null)
    setErrorMessage(null)
    try {
      const response = await axios.get(url);
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
          <FilterBar make={make} type={type}/>
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
