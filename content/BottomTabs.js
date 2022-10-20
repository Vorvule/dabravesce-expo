import * as React from "react";
import { useWindowDimensions } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";

import { Core } from "./Core/Core";
import { Menu } from "./Menu/Menu";
import { Info } from "./Info/Info";

import { sizeFont } from "../functions/device";

const BottomTab = createBottomTabNavigator();

const fontStyle = {
  fontFamily: "comfortaa-bold",
};

export function BottomTabs() {
  const { width, height } = useWindowDimensions();

  return (
    <BottomTab.Navigator
      initialRouteName="Тэкст"
      screenOptions={{
        tabBarActiveTintColor: "#008080",
        tabBarInactiveTintColor: "#666666",
        tabBarLabelStyle: fontStyle,
        headerTitleStyle: [
          fontStyle,
          { color: "teal" },
          sizeFont(width, height, 17, 19),
        ],
        headerTitleAlign: "center",
      }}
    >
      <BottomTab.Screen
        name="Меню"
        component={Menu}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="menu" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Тэкст"
        component={Core}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="book" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Інфо"
        component={Info}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="info" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
