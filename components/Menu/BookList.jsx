import { StyleSheet,  View } from "react-native";
import Book from "./Book";

export default function BookList({ books }) {
  return books.map((book, key) => {
    return (
      <View key={key} style={styles.view}>
        <Book book={book} />
      </View>
    );
  });
}

const styles = StyleSheet.create({
  view: {
    paddingLeft: 18,
  },
});
