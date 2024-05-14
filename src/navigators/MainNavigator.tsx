import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Booking from '../screens/app/Booking';
import Home from '../screens/app/Home';
import { MainNavigatorParams } from '../types/navigation';
import History from '../screens/app/History';
import BookingDetails from '../screens/app/BookingDetails';
import HistoryDetails from '../screens/app/HistoryDetails';

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
        name='BookingDetails'
        component={BookingDetails}
      />
      <Stack.Screen
        name='History'
        component={History}
      />
      <Stack.Screen
        name='HistoryDetails'
        component={HistoryDetails}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator