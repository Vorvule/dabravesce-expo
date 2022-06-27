import { StyleSheet, View } from "react-native";

import Album from "./Album";

export default function AlbumList({ albums }) {
  return albums.map((album, key) => {
    return (
      <View style={styles.menu} key={key}>
        <Album album={album} keys={key} />
      </View>
    );
  });
}

const styles = StyleSheet.create({
  menu: {
    width: "100%",
    paddingLeft: 18,
  },
});
