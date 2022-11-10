import * as React from "react";

import { View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { BottomTabs } from "./BottomTabs";
import { styles } from "../styles/styles";

import { minHeight } from "../functions/device";

export default function AppContent() {
  const whiteTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
      border: "teal",
    },
  };

  return (
    <View style={[styles.appContainer, { minHeight: minHeight() }]}>
      <StatusBar backgroundColor="teal" style="light" />

      <NavigationContainer theme={whiteTheme}>
        <BottomTabs />
      </NavigationContainer>
    </View>
  );
}
