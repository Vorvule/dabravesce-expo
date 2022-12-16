import { useContext } from "react";
import { View } from "react-native";

import { ChainContext } from "../AppNavigation";
import { styles } from "../../styles/styles";

import Chapter from "./Chapter";

export default function Chapters({ chapters, keys }) {
  const [albumIndex, bookIndex, chapterIndex] = useContext(ChainContext).chain;

  return chapters.map((chapter, key) => {
    const styling =
      keys[0] == albumIndex && keys[1] == bookIndex && key == chapterIndex
        ? { color: "teal" }
        : {};

    return (
      <View style={styles.menuPadding} key={"chapter-" + key}>
        <Chapter chapter={chapter} keys={[...keys, key]} styling={styling} />
      </View>
    );
  });
}
