import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Honda', value: 'Honda' },
    { label: 'Toyota', value: 'Toyota' },
    { label: 'Tesla', value: 'Tesla' },
    { label: 'Subaru', value: 'Subaru' },
    { label: 'Hyundai', value: 'Hyundai' },
    { label: 'Porsche', value: 'Porsche' },
    { label: 'Mercedes', value: 'Mercedes' },
  ];

  const Search = ({make, setMake}) => {
    const [value, setValue] = useState(null);

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Choose a make"
        searchPlaceholder="Search..."
        value={make}
        onChange={item => {
          setMake(item.value);
        }}
      />
    );
  };

  export default Search;

  const styles = StyleSheet.create({
    dropdown: {
      margin: 10,
      height: 50,
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textItem: {
      flex: 1,
      fontSize: 16,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });