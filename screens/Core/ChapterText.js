import Paragraph from "../../components/Paragraph";

export default function ChapterText({ chapterText }) {
  return (
    <>
      {chapterText.map((name, index) => {
        return <Paragraph key={"chapter-text-" + index}>{name}</Paragraph>;
      })}
    </>
  );
}
