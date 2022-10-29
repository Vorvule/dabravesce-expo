import * as React from "react";
import * as Font from "expo-font";

import AppContent from "./content/AppContent";

const getFonts = () => {
  return Font.loadAsync({
    "comfortaa-bold": require("./assets/fonts/comfortaa-bold.ttf"),
    "comfortaa-regular": require("./assets/fonts/comfortaa-regular.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  if (fontsLoaded) {
    return <AppContent />;
  }

  getFonts().then(() => setFontsLoaded(true));
  return null;
}
