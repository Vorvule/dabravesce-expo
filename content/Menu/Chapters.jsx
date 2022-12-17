import { View } from "react-native";

import { MenuPage } from "../../functions/MenuPage";
import { styles } from "../../styles/styles";

import Chapter from "./Chapter";

export default function Chapters({ chapters, keys }) {
  return chapters.map((chapter, key) => {
    const styler = MenuPage.styler(key, keys);

    return (
      <View style={styles.menuPadding} key={"chapter-" + key}>
        <Chapter chapter={chapter} keys={[...keys, key]} styler={styler} />
      </View>
    );
  });
}
