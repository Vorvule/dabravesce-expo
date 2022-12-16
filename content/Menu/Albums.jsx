import { useContext } from "react";
import { View } from "react-native";

import { ChainContext } from "../AppNavigation";
import Album from "./Album";

export default function Albums({ albums }) {
  const albumIndex = useContext(ChainContext).chain[0];
  
  return albums.map((album, key) => {
    const styling = key == albumIndex ? { color: "teal" } : {};

    return (
      <View key={"album-" + key}>
        <Album album={album} keys={[key]} styling={styling} />
      </View>
    );
  });
}
