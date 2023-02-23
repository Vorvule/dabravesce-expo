import { createContext } from "react";
import { Image, useWindowDimensions } from "react-native";

import { allAlbums } from "../../assets/albums/AllAlbums";
import { styles } from "../../styles/styles";

import Albums from "./Albums";
import Screen from "../components/Screen";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

const NavigationContext = createContext();

export function MenuScreen({ navigation }) {
  const { width, height } = useWindowDimensions();

  return (
    <NavigationContext.Provider value={navigation}>
      <Screen>
        {/* <Title>Дабравесце</Title>
        <SubTitle>Слова Божае</SubTitle> */}
        <Image
          source={require("../../assets/images/banner/dabravesce-banner.png")}
          style={{
            width: width,
            height: height,
            maxWidth: 600,
            maxHeight: 150,
            alignSelf: "center"
          }}
        />

        <Albums albums={allAlbums} />
      </Screen>
    </NavigationContext.Provider>
  );
}
