import { createContext } from "react";

import Albums from "./Albums";

import { allAlbums } from "../../assets/albums/albums";
import { Screen } from "../../components/Screen";
import Title from "../../components/Title";

const NavigationContext = createContext();

export function Menu({ navigation }) {
  return (
    <NavigationContext.Provider value={navigation}>
      <Screen>
        <Title styling={{ fontSize: 18 }}>Дабравесце</Title>
        <Title styling={{ fontSize: 17 }}>Слова Божае</Title>

        <Albums albums={allAlbums} />
      </Screen>
    </NavigationContext.Provider>
  );
}
