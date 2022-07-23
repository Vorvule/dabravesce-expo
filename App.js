import * as React from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { BottomTabs } from "./tabs/BottomTabs";
import { View, StyleSheet } from "react-native";

const getFonts = () => {
  return Font.loadAsync({
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
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
  },
});
