import { StyleSheet, View } from "react-native";

import ChapterName from "./ChapterName";
import ChapterText from "./ChapterText";

export default function Core({ chapter }) {

  return (
    <View style={styles.view}>
      <ChapterName chapterName={chapter.name} />
      <ChapterText chapterText={chapter.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: "100%",
    maxWidth: 800,
    alignSelf: "center",
    padding: 16,

    backgroundColor: "lightyellow",
  },
});
