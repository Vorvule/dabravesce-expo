import { View } from "react-native";

import Album from "./Album";

export default function Albums({ albums, navigation }) {
  return albums.map((album, key) => {
    return (
      <View key={"album-" + key}>
        <Album album={album} keys={key} navigation={navigation} />
      </View>
    );
  });
}
