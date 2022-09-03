import Title from "../../components/Title";

export default function ChapterName({ children }) {
  return children.split(" | ").map((name, index) => {
    return (
      <Title styling={{ fontSize: 17 }} key={"chapter-" + index}>
        {name}
      </Title>
    );
  });
}
