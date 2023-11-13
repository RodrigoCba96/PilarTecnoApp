import React,{ Component } from 'react';
import Profile from '../screens/profile/Profile'

import { createStackNavigator } from '@react-navigation/stack';

const ProfileStack = createStackNavigator();

export const ProfileStackScreen = () => {
return(
<ProfileStack.Navigator>

    <ProfileStack.Screen name="Lists" component={Profile} />

</ProfileStack.Navigator>
)
}
