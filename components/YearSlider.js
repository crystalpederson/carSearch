import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import RangeSlider from 'rn-range-slider';
import { Button } from 'react-native-elements'

import Thumb from './slider/Thumb';
import Rail from './slider/Rail';
import RailSelected from './slider/RailSelected';
import Label from './slider/Label';
import Notch from './slider/Notch';

import { colors } from '../utils/index'

const { PRIMARY_COLOR, WHITE } = colors; 

const YearSlider = ( { year, setYear, setIsVisible }) => {

    const firstYear = year[0] || 2010;
    const lastYear = year[year.length - 1] || 2022

    const [min, setMin] = useState(firstYear);
    const [max, setMax] = useState(lastYear);

    const changeYearRange = (low, high) => {
        let yearArray = []
        for(let i = low; i <= high; i++){
            yearArray.push(i)
        }
        setYear(yearArray)
    }
    
    const renderThumb = useCallback(() => <Thumb/>, []);
    const renderRail = useCallback(() => <Rail/>, []);
    const renderRailSelected = useCallback(() => <RailSelected/>, []);
    const renderLabel = useCallback(value => <Label text={value}/>, []);
    const renderNotch = useCallback(() => <Notch/>, []);
    const handleValueChange = useCallback((low, high) => {
        setMin(low)
        setMax(high)
    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Model Years:</Text>
            <RangeSlider
            style={styles.slider}
            min={2010}
            max={2022}
            low={min}
            high={max}
            step={1}
            floatingLabel={false}
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            renderLabel={renderLabel}
            renderNotch={renderNotch}
            onValueChanged={handleValueChange}
            onTouchEnd={changeYearRange}
            />
            <View style={styles.sliderText}>
              <Text>{min}</Text>
              <Text>{max}</Text>              
            </View>
            <View style={styles.buttonContainer}>
              <Button 
                onPress={() => {setYear([]); setIsVisible(false);}} 
                buttonStyle={[styles.clearButton, styles.shadow]} 
                title='Clear' 
                titleStyle={styles.clearButtonText}
              />
              <Button 
                onPress={() => setIsVisible(false)} 
                buttonStyle={[styles.doneButton, styles.shadow]} 
                title='Done' 
                titleStyle={styles.doneButtonText}
              />
            </View>

        </View>
    )
}

export default YearSlider;

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      backgroundColor: WHITE,
      padding: 10
    },
    slider: {
    },
    sliderText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontWeight: 'bold'
    },
    clearButton: {
      margin: 5,
      height: 40,
      width: 140,
      borderRadius: 22,
      paddingHorizontal: 8,
      borderWidth: 1,
      borderColor: PRIMARY_COLOR,
      backgroundColor: WHITE
    },
    doneButton: {
      margin: 5,
      height: 40,
      width: 140,
      borderRadius: 22,
      paddingHorizontal: 8,
      backgroundColor: PRIMARY_COLOR
    },
    clearButtonText: {
      color: PRIMARY_COLOR,
      fontWeight: 'bold'
    },
    doneButtonText: {
      color: WHITE,
      fontWeight: 'bold'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold'
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
})

