import { View } from "react-native";

import { styles } from "../../styles/styles";

import Chapter from "./Chapter";

export default function Chapters({ chapters, keys }) {
  return chapters.map((chapter, key) => {
    return (
      <View style={styles.menuPadding} key={"chapter-" + key}>
        <Chapter chapter={chapter} keys={[...keys, key]} />
      </View>
    );
  });
}
