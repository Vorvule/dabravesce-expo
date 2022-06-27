import { StyleSheet, Text, View } from "react-native";

import { Ul } from "../../src/components/LeftColumn/Menu/Ul";

import ChapterList from "./ChapterList";

export default function BookList({ books, albumKey }) {
  return books.map((book, key) => {
    return (
      <View key={key} style={styles.view}>
        <Text onPress={() => Ul.toggleShow(book.idEn)}>{book.name}</Text>
        <View style={styles.view}>
          <ChapterList albumKey={albumKey} bookKey={key} chapters={book.text} />
        </View>
      </View>
    );
  });
}

const styles = StyleSheet.create({
  view: {
    paddingLeft: 18,
  },
});
