import React, { useCallback, useState, useEffect } from 'react';
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
        console.log(`Year changed to ${yearArray}`)
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
            <Text>Select model year:</Text>
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
            <Text>{min}</Text>
            <Text>{max}</Text>
            <Button 
              onPress={() => setYear([])} 
              buttonStyle={styles.button} 
              title='Clear' 
              titleStyle={styles.buttonText}
            />
            <Button 
              onPress={() => setIsVisible(false)} 
              buttonStyle={styles.button} 
              title='Done' 
              titleStyle={styles.buttonText}
            />
        </View>
    )
}

export default YearSlider;

const styles = StyleSheet.create({
    container:{
      backgroundColor: WHITE,
      padding: 10
    },
    slider: {
    },
    button: {
        margin: 5,
        height: 40,
        width: 110,
        backgroundColor: '#EEEEEE',
        borderRadius: 22,
        paddingHorizontal: 8,
    },
    buttonText: {
      color: PRIMARY_COLOR
    }
})

