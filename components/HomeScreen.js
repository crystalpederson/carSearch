import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils/index'
import { Button } from 'react-native-elements'

const { PRIMARY_COLOR, TRANSPARENT_LIGHTER, CHARCOAL } = colors; 

import Search from './Search';

const Home = ({ make, setMake, onSubmit }) => {

    return(
        <View style={[styles.container, styles.shadow]}>
          <Text style={styles.title}>Find a car:</Text>
          <Search make={make} setMake={setMake} style={styles.shadow}/>
          <Button
            title="Search"
            onPress={onSubmit}
            buttonStyle={[styles.button, styles.shadow]}
            titleStyle={styles.text}
          />               
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container:{
        backgroundColor: TRANSPARENT_LIGHTER,
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        paddingTop: 15,
        paddingBottom: 12
    },
    button: {
        margin: 5,
        height: 40,
        width: 140,
        borderRadius: 22,
        paddingHorizontal: 8,
        backgroundColor: PRIMARY_COLOR,
    },
    text:{
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        color: CHARCOAL,
        fontWeight: 'bold',
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
})