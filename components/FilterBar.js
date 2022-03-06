import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { colors } from '../utils/index'

import TypePicker from './TypePicker';

const { PRIMARY_COLOR, SECONDARY_COLOR, WHITE } = colors; 

const FilterBar = ({ year, type, setType, setIsVisible }) => {

    let buttonText = 'Any Year'
    if(year.length === 1) buttonText = year[0];
    else if(year.length > 1) buttonText = `${year[0]} - ${year[year.length-1]}`
    
    return(
        <View style={styles.container} >
            <TypePicker type={type} setType={setType}/>
            <Button
                buttonStyle={[styles.button, styles.shadow]} 
                title={buttonText}
                onPress={() => setIsVisible(true)}
                titleStyle={styles.text}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 5
    },
    button: {
        margin: 5,
        height: 40,
        width: 140,
        borderRadius: 22,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
        backgroundColor: WHITE
    },
    text:{
      color: PRIMARY_COLOR,
      fontSize: 16
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
  

export default FilterBar;
