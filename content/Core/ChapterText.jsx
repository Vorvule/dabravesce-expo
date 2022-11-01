import Block from "../components/Block";

export default function ChapterText({ chapterText }) {
  return chapterText.map((name, index) => {
    return <Block key={"chapter-text-" + index}>{name}</Block>;
  });
}
