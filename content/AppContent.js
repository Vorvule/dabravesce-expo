import * as React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

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

  return (
    <View style={styles.appContainer}>
      <StatusBar backgroundColor="teal" style="light" />

      <NavigationContainer theme={whiteTheme}>
        <BottomTabs />
      </NavigationContainer>
    </View>
  );
}
