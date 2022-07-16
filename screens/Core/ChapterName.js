import { StyleSheet, Text } from "react-native";

export default function ChapterName({ chapterName }) {
  return (
    <>
      {chapterName.split(" | ").map((name, index) => {
        return (
          <Text style={styles.name} key={"name-" + index}>
            {name}
          </Text>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "500",
    fontSize: 16,
  },
});
