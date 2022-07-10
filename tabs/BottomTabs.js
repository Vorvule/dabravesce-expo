import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome } from "@expo/vector-icons";

import { Content } from "../screens/Content";
import { Links } from "../screens/Links";
import { Evangel } from "../screens/Evangel";

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Змест"
      screenOptions={{
        tabBarActiveTintColor: "#008080",
        tabBarInactiveTintColor: "#666666",
      }}
    >
      <Tab.Screen
        name="Змест"
        component={Content}
        options={{
          tabBarLabel: "Змест",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bars" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Дабравесце"
        component={Evangel}
        options={{
          tabBarLabel: "Дабравесце",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Спасылкі"
        component={Links}
        options={{
          tabBarLabel: "Спасылкі",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="link" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
