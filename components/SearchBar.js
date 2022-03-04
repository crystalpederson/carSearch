import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native'
import { colors } from '../utils/index'

const { BORDER_COLOR } = colors; 

const SearchBar = ({ setMake }) => {
    
    return(
        <View >
            <TextInput 
                style={styles.input}
                autoCapitalize='words'
                placeholder='Car make'
                onSubmitEditing={(value) => {setMake(value.nativeEvent.text)}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: BORDER_COLOR,
      }
  });
  

export default SearchBar;