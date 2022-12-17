import { useContext } from "react";
import { View } from "react-native";

import { ChainContext } from "../AppNavigation";
import { MenuPage } from "../../functions/MenuPage";

import Album from "./Album";

export default function Albums({ albums }) {
  return albums.map((album, key) => {
    const styling = MenuPage.styler(useContext(ChainContext).chain, key);

    return (
      <View key={"album-" + key}>
        <Album album={album} keys={[key]} styling={styling} />
      </View>
    );
  });
}
