import React,{ Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs'
import Login from '../screens/Login'
const Stack = createStackNavigator();
export default AppStack = (props) => {
const isLogged = true
return(
<Stack.Navigator headerMode="none">
{
islogged? (
<Stack.Screen name="AppStack" component={Tabs} />
) : (
<Stack.Screen name="LogIn" component={Login} />
)
}
</Stack.Navigator>
)
}
