import * as React from "react";
import { Platform } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import { Core } from "./Core/Core";
import { Menu } from "./Menu/Menu";
import { Settings } from "./Settings/Settings";

const BottomTab = createBottomTabNavigator();

const fontStyle = {
  fontFamily: "comfortaa-bold",
};

export function BottomTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="Тэкст"
      screenOptions={{
        tabBarActiveTintColor: "#008080",
        tabBarInactiveTintColor: "#666666",
        tabBarLabelStyle: fontStyle,
        headerTitleStyle: [
          fontStyle,
          { color: "teal", ...Platform.select({ native: { fontSize: 16 } }) },
        ],
        headerTitleAlign: "center",
      }}
    >
      <BottomTab.Screen
        name="Меню"
        component={Menu}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bars" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Тэкст"
        component={Core}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Налады"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gear" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
