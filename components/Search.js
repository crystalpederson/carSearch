import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';

const Search = ({ make, setMake }) => {
  const [allMakes, setAllMakes] = useState([])

  useEffect(() => {
    getMakes();
  }, [])

  async function getMakes() {
    try {
      const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json');
      const makesArray = response.data.Results;
      setAllMakes(makesArray)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={allMakes}
      search
      maxHeight={300}
      labelField="Make_Name"
      valueField="Make_Name"
      placeholder="Choose a make"
      searchPlaceholder="Search..."
      value={make}
      onChange={item => {
        setMake(item.Make_Name);
      }}
    />
  );
};

export default Search;

const styles = StyleSheet.create({
  dropdown: {
    minWidth: 250,
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