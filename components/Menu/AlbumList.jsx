import { StyleSheet, View } from "react-native";

import Album from "./Album";

export default function AlbumList({ albums }) {
  return albums.map((album, key) => {
    return (
      <View key={key} style={styles.menu}>
        <Album album={album} />
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
