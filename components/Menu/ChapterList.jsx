import { Text } from "react-native";

export default function ChapterList({ chapters, keys }) {
  return chapters.map((chapter, chapterKey) => {
    const threeKeys = keys + "-" + chapterKey;
    const handlePress = () => {}; // window.setKeys(keys)
    console.log(threeKeys);

    return (
      <Text key={threeKeys} onPress={handlePress}>
        {chapter.name.replace(/ \| .+/, "")}
      </Text>
    );
  });
}
