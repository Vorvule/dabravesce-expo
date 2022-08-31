import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import { MenuScreen } from "./Menu/MenuScreen";
import { CoreScreen } from "./Core/CoreScreen";
import { InfoScreen } from "./Info/InfoScreen";

const BottomTab = createBottomTabNavigator();

const fontStyle = {
  fontFamily: "comfortaa-bold",
};

export function BottomTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="Інфо"
      screenOptions={{
        tabBarActiveTintColor: "#008080",
        tabBarInactiveTintColor: "#666666",
        headerTitleAlign: "center",
        headerTitleStyle: [fontStyle, { color: "teal" }],
        tabBarLabelStyle: fontStyle,
      }}
    >
      <BottomTab.Screen
        name="Меню"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bars" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Тэкст"
        component={CoreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Інфо"
        component={InfoScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="info" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
