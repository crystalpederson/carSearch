import React, { useState } from 'react';
import { View, StyleSheet, Button, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './utils/index';

const { PRIMARY_COLOR, SECONDARY_COLOR, WHITE } = colors;

import Home from './components/HomeScreen';
import SearchResults from './components/SearchResults';
import Search from './components/Search';

function HomeScreen({ navigation }) {
  const [make, setMake] = useState('')

  const onSubmit = () => {
    navigation.navigate('Results', {initialMake: make});
    setMake('');
  }

  return (
    <View style={styles.home}>
      <ImageBackground
        source={require('./assets/background.png')}
        resizeMode='cover'
        style={styles.image}
      >
        <View style={styles.main}>
          <Home make={make} setMake={setMake} onSubmit={onSubmit}/>
        </View>
      </ImageBackground>
    </View>
  );
}

function ResultsScreen({ route }) {
  const { initialMake } = route.params;
  return (
    <View style={styles.results}>
      <SearchResults initialMake={initialMake}/>
    </View>
  );
}

function LogoTitle(){
  return(
    <Image
      style={{width: 140, height: 25}}
      source={require('./assets/logo.png')}
    />
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: PRIMARY_COLOR,
          },
          headerTintColor: WHITE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: (props) => <LogoTitle {...props}/>
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Home',
          }} 
        />
        <Stack.Screen 
          name="Results" 
          component={ResultsScreen}
          options={{
            headerBackTitleVisible: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  home:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE
  },
  results:{ 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  image:{
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
