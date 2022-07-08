import { StyleSheet, View } from "react-native";

import Book from "./Book";

export default function Books({ books, keys }) {
  return books.map((book, key) => {
    return (
      <View style={styles.view} key={"book-" + key}>
        <Book book={book} keys={keys + "-" + key} navigation={navigation} />
      </View>
    );
  });
}

const styles = StyleSheet.create({
  view: {
    paddingLeft: 18,
  },
});
