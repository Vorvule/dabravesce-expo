import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome } from "@expo/vector-icons";

import { MenuScreen } from "../screens/MenuScreen";
import { InfoScreen } from "../screens/InfoScreen";
import { TextScreen } from "../screens/TextScreen";

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Меню"
      screenOptions={{
        tabBarActiveTintColor: "#008080",
        tabBarInactiveTintColor: "#666666",
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="Меню"
        component={MenuScreen}
        options={{
          tabBarLabel: "Меню",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bars" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Тэкст"
        component={TextScreen}
        options={{
          tabBarLabel: "Тэкст",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Інфо"
        component={InfoScreen}
        options={{
          tabBarLabel: "Інфо",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="info" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
