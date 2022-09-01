import Title from "../../components/Title";

export default function ChapterName({ children, styling }) {
  return children.split(" | ").map((name, index) => {
    return (
      <Title styling={styling} key={"chapter-" + index}>
        {name}
      </Title>
    );
  });
}
