import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppContext } from '../context/AppContext';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const RootNavigator = () => {
  const { isLoggedIn } = useAppContext()

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
      </SafeAreaView>
    </NavigationContainer >
  )
}

export default RootNavigator