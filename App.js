import * as React from "react";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { BottomTabs } from "./tabs/BottomTabs";
import { View, StyleSheet } from "react-native";

export default function App() {
  const whiteTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
      border: "teal"
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
