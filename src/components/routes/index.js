import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/login/Login';
import { Tabs } from './Tabs';

const Stack = createStackNavigator();

const AppStack = (props) => {
  const isLogged = true;  
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLogged ? (
        <Stack.Screen name="AppStack" component={Tabs} />
      ) : (
        <Stack.Screen name="LogIn" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
