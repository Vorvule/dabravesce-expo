import { StyleSheet, Text } from "react-native";

export default function ChapterText({ chapterText }) {
  return (
    <>
      {chapterText.map((name, index) => {
        return (
          <Text style={styles.chapterName} key={"chapterText-" + index}>
            {name}
          </Text>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  chapterName: {
    lineHeight: 24,
    fontSize: 16,
  },
});
