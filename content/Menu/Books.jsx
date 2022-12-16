import { useContext } from "react";
import { View } from "react-native";

import { ChainContext } from "../AppNavigation";
import { styles } from "../../styles/styles";

import Book from "./Book";

export default function Books({ books, keys }) {
  const [albumIndex, bookIndex] = useContext(ChainContext).chain;

  return books.map((book, key) => {
    const styling =
      keys[0] == albumIndex && key == bookIndex ? { color: "teal" } : {};

    return (
      <View style={styles.menuPadding} key={"book-" + key}>
        <Book book={book} keys={[...keys, key]} styling={styling} />
      </View>
    );
  });
}

