import Paragraph from "../../components/Paragraph";

export default function ChapterText({ chapterText }) {
  return (
    <>
      {chapterText.map((name, index) => {
        return (
          <Paragraph font="comfortaa-regular" key={"chapterText-" + index}>
            {name}
          </Paragraph>
        );
      })}
    </>
  );
}
