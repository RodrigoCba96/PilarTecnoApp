import React,{ Component } from 'react';
import Lists from '../lists/Lists'
import { createStackNavigator } from '@react-navigation/stack';
 import ListDetail from '../lists/ListDetail'

const ListStack = createStackNavigator();

export const ListsStackScreen = () => {
return(
<ListStack.Navigator>

    <ListStack.Screen name="Lists" component={Lists} />
    <ListStack.Screen name="ListDetail" component={ListDetail} />

</ListStack.Navigator>
)
}
