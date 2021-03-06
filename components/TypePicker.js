import React from 'react';
import { View, StyleSheet } from 'react-native'
import { SelectCountry } from 'react-native-element-dropdown';
import { colors } from '../utils/index'

const { PRIMARY_COLOR, SECONDARY_COLOR, WHITE } = colors; 

const car_types = [
    {
      value: 'Car',
      lable: 'Cars',
    },
    {
      value: 'Truck',
      lable: 'Trucks'
    },
    {
      value: 'MPV',
      lable: 'MPVs'
    },
    {
      value: '',
      lable: 'Any type'
    }
  ];

const TypePicker = ({type, setType}) => {
    
    return(
        <View>
      <SelectCountry
        style={[styles.dropdown, styles.shadow]}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        containerStyle={styles.containerStyle}
        maxHeight={160}
        value={type}
        data={car_types}
        valueField="value"
        labelField="lable"
        placeholder="Vehicle Type"
        placeholderStyle={styles.text}
        activeColor={SECONDARY_COLOR}
        onChange={e => {
          setType(e.value);
        }}
      />
        </View>
    )
}

export default TypePicker;

const styles = StyleSheet.create({
    dropdown: {
      margin: 5,
      height: 40,
      width: 140,
      borderRadius: 22,
      paddingHorizontal: 8,
      borderWidth: 1,
      borderColor: PRIMARY_COLOR,
      backgroundColor: WHITE
    },

    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
      marginLeft: 8,
      color: PRIMARY_COLOR
    },
    containerStyle: {
      marginLeft: 0
    },
    text:{
      color: PRIMARY_COLOR
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