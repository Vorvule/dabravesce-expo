import { createContext } from "react";

import { allAlbums } from "../../assets/albums/AllAlbums";

import Albums from "./Albums";
import Screen from "../components/Screen";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

const NavigationContext = createContext();

export function MenuScreen({ navigation }) {
  return (
    <NavigationContext.Provider value={navigation}>
      <Screen>
        <Title>Дабравесце</Title>
        <SubTitle>Слова Божае</SubTitle>

          <Albums albums={allAlbums} />
      </Screen>
    </NavigationContext.Provider>
  );
}
