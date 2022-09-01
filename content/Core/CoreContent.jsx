import { View } from "react-native";
import * as React from "react";

import ChapterAudio from "./ChapterAudio";
import ChapterName from "./ChapterName";
import ChapterText from "./ChapterText";

import Title from "../../components/Title";

export default function CoreContent({ chapter, bookName }) {
  return (
    <View>
      <Title styling={{ fontSize: 18 }}>{bookName}</Title>

      <ChapterName styling={{ fontSize: 17 }}>{chapter.name}</ChapterName>

      {chapter.audio && <ChapterAudio chapterAudio={chapter.audio} />}

      <ChapterText chapterText={chapter.text} />
    </View>
  );
}
