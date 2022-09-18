import { createContext } from "react";

import { allAlbums } from "../../assets/albums/albums";
import { Screen } from "../../components/Screen";

import Albums from "./Albums";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";

const NavigationContext = createContext();

export function Menu({ navigation }) {
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
