import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import AppContext from './src/context/AppContext';
import RootNavigator from './src/navigators/RootNavigator';

export default function App() {
  return (
    <>
      <AppContext>
        <RootNavigator />
      </AppContext>
      <StatusBar style="auto" />
    </>
  );
}
