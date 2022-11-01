import * as React from "react";

import { View, useWindowDimensions } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { BottomTabs } from "./BottomTabs";
import { styles } from "../styles/styles";

export default function AppContent() {
  const whiteTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
      border: "teal",
    },
  };

  const { height } = useWindowDimensions(); // for the sake of mobile browser; if fails, delete

  return (
    <View style={[styles.appContainer, { height: height }]}>
      <StatusBar backgroundColor="teal" style="light" />

      <NavigationContainer theme={whiteTheme}>
        <BottomTabs />
      </NavigationContainer>
    </View>
  );
}
