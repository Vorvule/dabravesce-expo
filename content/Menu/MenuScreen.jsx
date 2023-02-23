import { createContext } from "react";
import { Image } from "react-native";

import Albums from "./Albums";
import Screen from "../components/Screen";

import { allAlbums } from "../../assets/albums/AllAlbums";
import { DeviceSpecific } from "../../functions/DeviceSpecific";

const NavigationContext = createContext();
const logoSource = require("../../assets/images/banner/dabravesce-banner.png");

export function MenuScreen({ navigation }) {
  return (
    <NavigationContext.Provider value={navigation}>
      <Screen>
        <Image source={logoSource} style={DeviceSpecific.logoStyle()} />

        <Albums albums={allAlbums} />
      </Screen>
    </NavigationContext.Provider>
  );
}
