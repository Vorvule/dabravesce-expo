import { Platform, StyleSheet } from "react-native";
import Title from "../../components/Title";

export default function ChapterName({ children }) {
  return children.split(" | ").map((name, index) => {
    return (
      <Title styling={ styles.subtitle } key={"chapter-" + index}>
        {name}
      </Title>
    );
  });
}

const styles = StyleSheet.create({
  subtitle: { fontSize: 17,
    ...Platform.select({
      native: { fontSize: 15 },
    }),},
})