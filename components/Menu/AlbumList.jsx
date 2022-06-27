import { StyleSheet, Text, View } from "react-native";

import BookList from "./BookList";

import { Ul } from "../../src/components/LeftColumn/Menu/Ul";

export default function AlbumList({ albums }) {
  return albums.map((album, key) => {
    return (
      <View key={key} style={styles.menu}>
        <Text onPress={() => Ul.toggleShow(album.idEn)}>{album.name}</Text>
        <View style={styles.view}>
          <BookList albumKey={key} books={album.text} />
        </View>
      </View>
    );
  });
}

const styles = StyleSheet.create({
  menu: {
    width: "100%",
    paddingLeft: 18,
  },
  view: {
  },
});
