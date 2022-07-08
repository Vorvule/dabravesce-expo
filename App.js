import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { BottomTabs } from "./tabs/BottomTabs";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
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
