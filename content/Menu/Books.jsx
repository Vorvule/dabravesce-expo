import { View } from "react-native";

import { MenuPage } from "../../functions/MenuPage";
import { styles } from "../../styles/styles";

import Book from "./Book";

export default function Books({ books, keys }) {
  return books.map((book, key) => {
    const styler = MenuPage.styler(key, keys);

    return (
      <View style={styles.menuPadding} key={"book-" + key}>
        <Book book={book} keys={[...keys, key]} styler={styler} />
      </View>
    );
  });
}
