import { View } from "react-native";

import { MenuPage } from "../../functions/MenuPage";

import Album from "./Album";

export default function Albums({ albums }) {
  return albums.map((album, key) => {
    const styling = MenuPage.styler(key, []);

    return (
      <View key={"album-" + key}>
        <Album album={album} keys={[key]} styling={styling} />
      </View>
    );
  });
}
