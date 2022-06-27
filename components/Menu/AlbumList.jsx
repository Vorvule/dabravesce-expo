import { StyleSheet, Text, View } from "react-native";

import BookList from "./BookList";

import { Ul } from "../../src/components/LeftColumn/Menu/Ul";

export default function AlbumList({ albums }) {
  return albums.map((album, key) => {
    const id = album.idEn;

    return (
      <View key={key}>
        {/* album name, toggle shows BookLists */}
        <Text onPress={() => Ul.toggleShow(id)}>{album.name}</Text>
        {/* UL list */}
        <View>
          <BookList albumKey={key} books={album.text} />
        </View>
      </View>
    );
  });
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 16,
    textIndent: 36,
    lineHeight: 24,
    marginBottom: 15,
  },
});
