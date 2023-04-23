import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/Main/Main';
import Setup from './components/Setup/Setup';
import SetupDriver from './components/SetupDriver/SetupDriver';
import RiderList from './components/RiderList/RiderList';
import RideInfoC from './components/RideInfo-Customer/RideInfo-Customer';
import RideInfoD from './components/RideInfo-Driver/RideInfo-Driver';
import Login from './components/Login/Login';
// import RideInfoC from './components/RideInfo-Customer/RideRideInfo-Customer';
// import RideInfoD from './components/RideInfo-Driver/RideRideInfo-Driver';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: true, }} />
        <Stack.Screen name='Main' component={Main} options={{ headerShown: true, }} />
        <Stack.Screen name='Setup' component={Setup} options={{ headerShown: true, }} />
        <Stack.Screen name='SetupDriver' component={SetupDriver} options={{ headerShown: true, }} />
        <Stack.Screen name='RiderList' component={RiderList} options={{ headerShown: true, }} />
        <Stack.Screen name='RideInfo-Customer' component={RideInfoC} options={{ headerShown: true, }} />
        <Stack.Screen name='RideInfo-Driver' component={RideInfoD} options={{ headerShown: true, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
