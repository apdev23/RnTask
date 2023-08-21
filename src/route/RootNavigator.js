import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RouteName from './RouteName';
import {Home, RegisterForm, Splash} from '../screens';
const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name={RouteName.SPLASH_SCREEN}
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={RouteName.REGISTRATION_SCREEN}
          component={RegisterForm}
          options={{headerShown: false}}
        />
        <Stack.Screen name={RouteName.HOME_SCREEN} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
