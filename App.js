import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './utils/index';

const { PRIMARY_COLOR, SECONDARY_COLOR, WHITE } = colors;

import Home from './components/HomeScreen';
import SearchResults from './components/SearchResults';

function HomeScreen({ navigation }) {
  const [make, setMake] = useState('')

  const onSubmit = () => {
    navigation.navigate('Results', {initialMake: make});
    setMake('');
  }

  return (
    <View style={styles.home}>
      <Home make={make} setMake={setMake}/>
      <Button
        title="Search"
        onPress={onSubmit}
      />
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
  },
  results:{ 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
  }
});
