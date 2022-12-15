import { View } from "react-native";

import Chapter from "./Chapter";
import { styles } from "../../styles/styles";

export default function Chapters({ chapters, chain }) {
  return chapters.map((chapter, key) => {
    return (
      <View style={styles.menuPadding} key={"chapter-" + key}>
        <Chapter chapter={chapter} chain={[...chain, key]} />
      </View>
    );
  });
}
