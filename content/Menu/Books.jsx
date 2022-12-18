import { View } from "react-native";

import { styles } from "../../styles/styles";

import Book from "./Book";

export default function Books({ books, keys }) {
  return books.map((book, key) => {

    return (
      <View style={styles.menuPadding} key={"book-" + key}>
        <Book book={book} keys={[...keys, key]} />
      </View>
    );
  });
}
