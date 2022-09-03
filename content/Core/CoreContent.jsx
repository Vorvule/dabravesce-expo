import * as React from "react";
import { Platform, StyleSheet } from "react-native";

import ChapterAudio from "./ChapterAudio";
import ChapterName from "./ChapterName";
import ChapterText from "./ChapterText";

import Title from "../../components/Title";

export default function CoreContent({ chapter, bookName }) {
  return (
    <>
      <Title styling={styles.title}>{bookName}</Title>

      <ChapterName>{chapter.name}</ChapterName>

      {chapter.audio && <ChapterAudio chapterAudio={chapter.audio} />}

      <ChapterText chapterText={chapter.text} />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    ...Platform.select({
      native: { fontSize: 16 },
    }),
  },
});
