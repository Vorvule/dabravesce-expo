import { createContext } from "react";

import Albums from "./Albums";

import { allAlbums } from "../../assets/albums/albums";
import { Screen } from "../../components/Screen";

const NavigationContext = createContext();

export function Menu({ navigation }) {
  return (
    <NavigationContext.Provider value={navigation}>
      <Screen>
        <Albums albums={allAlbums} />
      </Screen>
    </NavigationContext.Provider>
  );
}
