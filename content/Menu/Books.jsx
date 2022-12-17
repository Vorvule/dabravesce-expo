import { useContext } from "react";
import { View } from "react-native";

import { ChainContext } from "../AppNavigation";
import { MenuPage } from "../../functions/MenuPage";
import { styles } from "../../styles/styles";

import Book from "./Book";

export default function Books({ books, keys }) {
  return books.map((book, key) => {
    const styling = MenuPage.styler(useContext(ChainContext).chain, key, keys);

    return (
      <View style={styles.menuPadding} key={"book-" + key}>
        <Book book={book} keys={[...keys, key]} styling={styling} />
      </View>
    );
  });
}
