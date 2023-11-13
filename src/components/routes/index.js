import React,{ Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import { Tabs } from './Tabs'
 import Home from '../screens/Home';
 import Login from '../screens/login/Login';



const Stack = createStackNavigator();

export default AppStack = (props) => {

const isLogged = true

return(
<Stack.Navigator headerMode="none">
{
false? (
<Stack.Screen name="AppStack" component={Home} />
) : (
<Stack.Screen name="LogIn" component={Login} />
)
}
</Stack.Navigator>
)
}