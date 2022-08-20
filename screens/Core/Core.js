import { StyleSheet, View } from "react-native";
import * as React from "react";

import ChapterName from "./ChapterName";
import ChapterSound from "./ChapterSound";
import ChapterText from "./ChapterText";
import ChapterAudio from "./ChapterAudio";

export default function Core({ chapter }) {
  return (
    <View style={styles.view}>
      <ChapterName chapterName={chapter.name} />
      {/* <ChapterSound chapterAudio={chapter.audio} /> */}
      <ChapterAudio chapterAudio={chapter.audio} />
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
  },
});
