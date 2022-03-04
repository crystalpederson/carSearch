import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils/index'

const { BORDER_COLOR } = colors; 

const TypePicker = ({ type }) => {
    
    return(
        <View style={styles.filterItem}>
            <Text style={styles.text}>{type ? type : 'Vehicle Type'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    filterItem: {
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        margin: 5
    },
    text: {
        textTransform: 'capitalize'
    }
});
  

export default TypePicker;