import * as React from "react";

import { allAlbums } from "../../assets/albums/albums";

import Albums from "./Albums";
import Screen from "../../components/Screen";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";

const NavigationContext = React.createContext();

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
