import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { navigationConfig } from './config';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Analytics">
        {navigationConfig.map(item => {
          return (
            <Stack.Screen
              key={item.name}
              name={item.name}
              component={item.component}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
