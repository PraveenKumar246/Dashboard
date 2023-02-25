import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Homescreen';
import Profilescreen from './src/screens/Profilescreen';

const Routes = () => {
  
    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Profile" component={Profilescreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
    
}

export default Routes

