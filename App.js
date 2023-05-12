import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import StartingScreen from './src/screens/StartingScreen';

import Version_1 from './src/screens/fragments/Version_1';
import Version_2 from './src/screens/fragments/Version_2';

const Stack = createStackNavigator();


export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="StartingScreen">

        <Stack.Screen name="StartingScreen" component={StartingScreen} options={{ title: 'Fragmenten Overzicht', headerShown: false }} />

        <Stack.Screen name="Version_1" component={Version_1} options={{ title: 'Version_1', headerShown: false }} />

        <Stack.Screen name="Version_2" component={Version_2} options={{ title: 'Version_1', headerShown: false }} />

      </Stack.Navigator>

    </NavigationContainer>
    
  );
}