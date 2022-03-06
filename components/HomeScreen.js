import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { colors } from '../utils/index'

const { PRIMARY_COLOR, SECONDARY_COLOR, WHITE } = colors; 

import Search from './Search';

const Home = ({ make, setMake, navigation }) => {

    return(
        <View style={styles.container}>
            <Search make={make} setMake={setMake}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: SECONDARY_COLOR
    }
  });
  

export default Home;