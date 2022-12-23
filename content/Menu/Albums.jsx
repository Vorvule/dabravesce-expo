import { useContext, useState } from "react";
import { View } from "react-native";

import { ChainContext } from "../AppNavigation";

import Album from "./Album";

export default function Albums({ albums }) {
  const chain = useContext(ChainContext).chain.slice(0, 2);
  const folding = useState(chain);

  return albums.map((album, key) => {
    return (
      <View key={"album-" + key}>
        <Album album={album} keys={[key]} folding={folding} />
      </View>
    );
  });
}
