import * as React from "react";
import { View } from "react-native";

import { styles } from "../../styles/styles";

import ChapterAudio from "./ChapterAudio";
import ChapterName from "./ChapterName";
import ChapterText from "./ChapterText";

import Title from "../components/Title";

export default function CoreContent({ chapter, bookName }) {
  return (
    <View style={styles.screenContent}>
      <Title>{bookName}</Title>
      <ChapterName>{chapter.name}</ChapterName>
      {chapter.audio && <ChapterAudio chapterAudio={chapter.audio} />}
      <ChapterText chapterText={chapter.text} />
    </View>
  );
}
