import * as React from "react";

import { View, StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { BottomTabs } from "./BottomTabs";

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
      <View style={styles.container}>
        <NavigationContainer theme={whiteTheme}>
          <BottomTabs />
        </NavigationContainer>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
  },
});
