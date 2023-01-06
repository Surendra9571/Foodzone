import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wellcome from './assets/components/Wellcome';
import Login from './assets/components/Login';
import Home from './assets/components/Home';
import Sign from './assets/components/Sign';



const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Wellcome" component={Wellcome} />
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sign" component={Sign} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;