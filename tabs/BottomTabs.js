import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import { InfoScreen } from "../screens/InfoScreen";
import { MenuScreen } from "../screens/MenuScreen";
import { TextScreen } from "../screens/TextScreen";

const Tab = createBottomTabNavigator();

const fontStyle = {
  fontFamily: "comfortaa-regular",
  fontWeight: 600,
};

export function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Меню"
      screenOptions={{
        tabBarActiveTintColor: "#008080",
        tabBarInactiveTintColor: "#666666",
        headerTitleAlign: "center",
        headerTitleStyle: fontStyle,
        tabBarLabelStyle: fontStyle,
      }}
    >
      <Tab.Screen
        name="Меню"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bars" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Тэкст"
        component={TextScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Інфо"
        component={InfoScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="info" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
