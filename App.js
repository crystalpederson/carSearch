import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { colors } from './utils/index'

const { BORDER_COLOR, PRIMARY_COLOR } = colors; 

import CarContainer from './components/CarContainer';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import YearSlider from './components/YearSlider';

export default function App() {
  const [cars, setCars] = useState([]);
  const [make, setMake] = useState('Honda');
  const [type, setType] = useState('')
  const [year, setYear] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getCars()
  }, [make, type, year])

  const carMakeUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`
  const makeAndTypeUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/vehicleType/${type}?format=json`
  let url;

  if(type){
    url = makeAndTypeUrl
  }else{
    url = carMakeUrl
  }

  async function getCars() {
    setCars(null)
    setErrorMessage(null)
    if(year.length && type){
      console.log('all selected')
      let carsArray = []
      for(let i = 0; i < year.length; i++){
        const currYear = year[i]
        url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/modelyear/${currYear}/vehicleType/${type}?format=json`
        try {
          const response = await axios.get(url);
          carsArray = carsArray.concat(response.data.Results);
          setCars(carsArray)
        } catch (error) {
          console.error(error);
          setErrorMessage('No cars found')
        }
      }
    }
    else if(year.length){
      console.log('year selected')
      console.log(year)
      let carsArray = []
      for(let i = 0; i < year.length; i++){
        const currYear = year[i]
        url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/modelyear/${currYear}?format=json`
        try {
          const response = await axios.get(url);
          carsArray = carsArray.concat(response.data.Results);
          setCars(carsArray)
        } catch (error) {
          console.error(error);
          setErrorMessage('No cars found')
        }
      }
    }
    else{
      try {
        console.log('only make selected')
        const response = await axios.get(url);
        const carsArray = response.data.Results;
        setCars(carsArray)
      } catch (error) {
        console.error(error);
        setErrorMessage('No cars found')
      }
    }

  }

  if(cars){
    return(
      <View style={styles.listContainer}>
        <StatusBar style="auto" />
        <SafeAreaView>
          <Text>Search for a car!</Text>
          <Text>{cars.length} results: </Text>
          <SearchBar setMake={setMake} getCars={getCars}/>
          <FilterBar make={make} type={type} setType={setType}/>
          {/* <YearSlider setYear={setYear}/> */}
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
        <ActivityIndicator size='large' color={PRIMARY_COLOR}/>
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
  listContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  carsList: {
    margin: 10,
  }
});
