import * as React from "react";

import ChapterAudio from "./ChapterAudio";
import ChapterName from "./ChapterName";
import ChapterText from "./ChapterText";

import Title from "../components/Title";

export default function CoreContent({ chapter, bookName }) {
  return (
    <>
      <Title>{bookName}</Title>

      <ChapterName>{chapter.name}</ChapterName>
      {chapter.audio && <ChapterAudio chapterAudio={chapter.audio} />}
      
      <ChapterText chapterText={chapter.text} />
    </>
  );
}
