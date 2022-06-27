import { StyleSheet, Text, View } from "react-native";

import ChapterList from "./ChapterList";

export default function BookList({ books, albumKey }) {
  return books.map((book, key) => {
    return (
      <View key={key}>
        {/* book name, toggle shows chapters */}
        <Text>{book.name}</Text>
        {/* UL list */}
        <View>
          <ChapterList albumKey={albumKey} bookKey={key} chapters={book.text} />
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
