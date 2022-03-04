import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils/index'

import TypePicker from './TypePicker';

const { BORDER_COLOR } = colors; 

const FilterBar = ({ make, type }) => {
    
    return(
        <View style={styles.container} >
            <Text style={styles.filterItem}>{make}</Text>
            <TypePicker type={type}/>
            <Text style={styles.filterItem}>Year</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        margin: 2,
        flexDirection: 'row'
    },
    filterItem: {
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        margin: 5
    }
});
  

export default FilterBar;
