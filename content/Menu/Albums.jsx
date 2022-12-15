import { View } from "react-native";

import Album from "./Album";

export default function Albums({ albums }) {
  return albums.map((album, key) => {
    return (
      <View key={"album-" + key}>
        <Album album={album} chain={[key]} />
      </View>
    );
  });
}
