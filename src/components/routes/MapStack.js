import React from 'react';
import Mapas from '../screens/map/Map';
import { createStackNavigator } from '@react-navigation/stack';

const MapStack = createStackNavigator();

export const MapStackScreen = () => {
  return (
    <MapStack.Navigator>
      <MapStack.Screen name="Maps" component={Mapas} />
    </MapStack.Navigator>
  );
};
