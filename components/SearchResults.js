import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import { BottomSheet } from 'react-native-elements'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { colors } from '../utils/index'

const { PRIMARY_COLOR } = colors; 

import CarContainer from './CarContainer';
import FilterBar from './FilterBar';
import YearSlider from './YearSlider';
import Search from './Search';

export default function SearchResults({initialMake}) {
  const [cars, setCars] = useState([]);
  const [make, setMake] = useState(initialMake);
  const [type, setType] = useState('')
  const [year, setYear] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  let isMounted;

  useEffect(() => {
    isMounted = true;
    getCars()
    return () => { isMounted = false };
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
    setErrorMessage(null)
    if(year.length && type){
      console.log(`Query make=${make}, years=${year}, type=${type}`)
      let carsArray = []
      for(let i = 0; i < year.length; i++){
        const currYear = year[i]
        url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/modelyear/${currYear}/vehicleType/${type}?format=json`
        try {
          const response = await axios.get(url);
          const responseData = response.data.Results
          responseData.forEach((el) => {
            el['Model_Year'] = currYear
          })
          carsArray = carsArray.concat(responseData);
          setCars(carsArray)
        } catch (error) {
          console.error(error);
          setErrorMessage('No cars found')
        }
      }
    }
    else if(year.length){
      console.log(`Query make=${make}, years=${year}, type=any`)
      console.log(year)
      let carsArray = []
      for(let i = 0; i < year.length; i++){
        const currYear = year[i]
        url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/modelyear/${currYear}?format=json`
        try {
          const response = await axios.get(url);
          const responseData = response.data.Results
          responseData.forEach((el) => {
            el['Model_Year'] = currYear
          })
          carsArray = carsArray.concat(responseData);
          setCars(carsArray)
        } catch (error) {
          console.error(error);
          setErrorMessage('No cars found')
        }
      }
    }
    else{
      try {
        console.log(`Query make=${make}, years=any, type=any`)
        const response = await axios.get(url);
        const carsArray = response.data.Results;
        if(isMounted) setCars(carsArray); 
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
        <SafeAreaView style={styles.safe}>
          <Search make={make} setMake={setMake}/>
          <FilterBar year={year} make={make} type={type} setType={setType} setIsVisible={setIsVisible}/>
          <Text>{cars.length} results: </Text>
      <CarContainer cars={cars}/>
      <BottomSheet isVisible={isVisible}>
          <YearSlider year={year} setYear={setYear} setIsVisible={setIsVisible}/>
      </BottomSheet>

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
  },
  safe:{
    width: '100%',
    flex: 1
  },
});
