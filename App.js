import * as React from "react";
import * as Font from "expo-font";

import AppContainer from "./content/AppContainer";

const getFonts = () => {
  return Font.loadAsync({
    "comfortaa-bold": require("./assets/fonts/comfortaa-bold.ttf"),
    "comfortaa-regular": require("./assets/fonts/comfortaa-regular.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  if (fontsLoaded) {
    return <AppContainer />;
  }

  getFonts().then(() => setFontsLoaded(true));
  return null;
}
