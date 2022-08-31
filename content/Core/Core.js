import { StyleSheet, View } from "react-native";
import * as React from "react";

import ChapterName from "./ChapterName";
import ChapterText from "./ChapterText";
import ChapterAudio from "./ChapterAudio";

import Title from "../../components/Title";

export default function Core({ chapter, bookName }) {
  return (
    <View style={styles.view}>
      <Title styling={{ fontSize: 18 }}>{bookName}</Title>
      <Title styling={{ fontSize: 17 }}>{chapter.name}</Title>

      {chapter.audio && <ChapterAudio chapterAudio={chapter.audio} />}

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
