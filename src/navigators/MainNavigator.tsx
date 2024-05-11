import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Booking from '../screens/app/Booking';
import Home from '../screens/app/Home';
import { MainNavigatorParams } from '../types/navigation';
import History from '../screens/app/History';
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
      <Stack.Screen
        name='Booking'
        component={Booking}
      />
      <Stack.Screen
        name='History'
        component={History}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator