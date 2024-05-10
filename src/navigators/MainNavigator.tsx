import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/app/Home';
import { MainNavigatorParams } from '../types/navigation';
const Stack = createStackNavigator<MainNavigatorParams>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='Home'
        component={Home}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator