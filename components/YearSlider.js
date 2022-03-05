import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import RangeSlider from 'rn-range-slider';

import Thumb from './slider/Thumb';
import Rail from './slider/Rail';
import RailSelected from './slider/RailSelected';
import Label from './slider/Label';
import Notch from './slider/Notch';

import { colors } from '../utils/index'

const { BORDER_COLOR } = colors; 

const YearSlider = ( { setYear }) => {

    const [min, setMin] = useState(2010);
    const [max, setMax] = useState(2022);
    const [yearRange, setYearRange] = useState([])

    const changeYearRange = (low, high) => {
        let yearArray = []
        for(let i = low; i <= high; i++){
            yearArray.push(i)
        }
        console.log(yearArray)
        setMin(low)
        setMax(high)
        setYearRange(yearArray)
    }
    
    const renderThumb = useCallback(() => <Thumb/>, []);
    const renderRail = useCallback(() => <Rail/>, []);
    const renderRailSelected = useCallback(() => <RailSelected/>, []);
    const renderLabel = useCallback(value => <Label text={value}/>, []);
    const renderNotch = useCallback(() => <Notch/>, []);
    const handleValueChange = useCallback((low, high) => {
      changeYearRange(low, high)
    }, []);

    return(
        <View>
            <RangeSlider
            style={styles.slider}
            min={2010}
            max={2022}
            step={1}
            floatingLabel
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            renderLabel={renderLabel}
            renderNotch={renderNotch}
            onValueChanged={handleValueChange}
            />
            <Text>{min}</Text>
            <Text>{max}</Text>
            <Button
              title='Confirm'
              onPress={()=>{setYear(yearRange)}}
            />
        </View>
    )
}

export default YearSlider;

const styles = StyleSheet.create({
    slider: {

    }
})

