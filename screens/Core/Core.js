import { StyleSheet, View } from "react-native";
import * as React from "react";

import ChapterName from "./ChapterName";
import ChapterText from "./ChapterText";
import ChapterAudio from "./ChapterAudio";
import Paragraph from "../../components/Paragraph";

export default function Core({ chapter, bookName }) {
  return (
    <View style={styles.view}>
      <Paragraph customStyles={styles.book}>{bookName}</Paragraph>
      <ChapterName chapterName={chapter.name} />
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
  book: {
    textAlign: "center",
    fontFamily: "comfortaa-bold",
    fontSize: 18,
  }
});
