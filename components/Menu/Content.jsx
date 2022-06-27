import { StyleSheet, Text } from "react-native";

import AlbumList from "./AlbumList";

import { allAlbums } from "../../albums/albums";

export default function Content() {
  return (
    <Text style={styles.text}>
      <AlbumList albums={allAlbums} />
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    // textIndent: 36,
    lineHeight: 24,
    marginBottom: 15,
  },
});
