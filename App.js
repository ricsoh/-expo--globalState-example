// ************************************
// App.js
// ************************************
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ScreenOne from "./screens/ScreenOne";
import ScreenTwo from "./screens/ScreenTwo";
import ScreenThree from "./screens/ScreenThree";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="ScreenOne"
          component={ScreenOne}
          options={{
            tabBarLabel: "Screen 1",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cellphone-screenshot" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ScreenTwo"
          component={ScreenTwo}
          options={{
            tabBarLabel: "Screen 2",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cellphone-screenshot" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ScreenThree"
          component={ScreenThree}
          options={{
            tabBarLabel: "Screen 3",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cellphone-screenshot" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}