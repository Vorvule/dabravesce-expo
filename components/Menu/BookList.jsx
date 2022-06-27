import { StyleSheet, View } from "react-native";
import Book from "./Book";

export default function BookList({ books, keys }) {
  return books.map((book, key) => {
    const twoKeys = keys + "-" + key;

    return (
      <View style={styles.view} key={twoKeys}>
        <Book book={book} keys={twoKeys} />
      </View>
    );
  });
}

const styles = StyleSheet.create({
  view: {
    paddingLeft: 18,
  },
});
