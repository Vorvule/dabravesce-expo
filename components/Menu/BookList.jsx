import { StyleSheet, Text, View } from "react-native";

import { Ul } from "../../src/components/LeftColumn/Menu/Ul";

import ChapterList from "./ChapterList";

export default function BookList({ books, albumKey }) {
  return books.map((book, key) => {
    return (
      <View key={key}>
        <Text onPress={() => Ul.toggleShow(book.idEn)}>{book.name}</Text>
        <View>
          <ChapterList albumKey={albumKey} bookKey={key} chapters={book.text} />
        </View>
      </View>
    );
  });
}
