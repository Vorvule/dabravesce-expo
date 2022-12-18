import { useContext, useState } from "react";
import { View } from "react-native";

import { ChainContext } from "../AppNavigation";

import Album from "./Album";

export default function Albums({ albums }) {
  const [unfolded, setUnfolded] = useState(useContext(ChainContext).chain);

  return albums.map((album, key) => {
    return (
      <View key={"album-" + key}>
        <Album
          album={album}
          keys={[key]}
          unfolded={unfolded}
          setUnfolded={setUnfolded}
        />
      </View>
    );
  });
}
