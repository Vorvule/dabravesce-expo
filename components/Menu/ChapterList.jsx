import { StyleSheet, Text } from "react-native";

export default function ChapterList({ albumKey, bookKey, chapters }) {
  return chapters.map((chapter, chapterKey) => {
    const keys = [albumKey, bookKey, chapterKey];

    return (
      <Text key={chapterKey} onPress={() => window.setKeys(keys)}>
        {chapter.name.replace(/ \| .+/, "")}
      </Text>
    );
  });
}
