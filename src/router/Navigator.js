import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from '../utils/colors';

import AddAgent from '../screens/AddAgent';
import ManagedAgent from '../screens/ManagedAgent';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primaryBlue,
      }}>
      <Stack.Screen name="ManagedAgent" component={ManagedAgent} />
      <Stack.Screen name="AddAgent" component={AddAgent} />
    </Stack.Navigator>
  );
}

export default Navigator;
