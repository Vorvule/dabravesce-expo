import * as React from "react";

import { View, StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import * as Font from "expo-font";

import { BottomTabs } from "./tabs/BottomTabs";

const getFonts = () => {
  return Font.loadAsync({
    "comfortaa-bold": require("./assets/fonts/comfortaa-bold.ttf"),
    "comfortaa-regular": require("./assets/fonts/comfortaa-regular.ttf"),
  });
};

export default function App() {
  const whiteTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
      border: "teal",
    },
  };

  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <NavigationContainer theme={whiteTheme}>
          <BottomTabs />
        </NavigationContainer>
      </View>
    );
  }

  getFonts().then(() => setFontsLoaded(true));
  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
  },
});
