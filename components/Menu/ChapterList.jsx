import { StyleSheet, Text } from "react-native";

export default function ChapterList({ albumKey, bookKey, chapters }) {
  return chapters.map((chapter, chapterKey) => {
    const keys = [albumKey, bookKey, chapterKey];

    return (
      <Text
        key={chapterKey}
        style={styles.text}
        onPress={() => window.setKeys(keys)}
      >
        {chapter.name.replace(/ \| .+/, "")}
      </Text>
    );
  });
}

const styles = StyleSheet.create({
  text: {
    // textIndent: 18,
  },
});
