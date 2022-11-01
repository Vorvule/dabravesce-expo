import SubTitle from "../components/SubTitle";

export default function ChapterName({ children }) {
  return children.split(" | ").map((name, index) => {
    return <SubTitle key={"chapter-" + index}>{name}</SubTitle>;
  });
}
