import { StyleSheet, View } from "react-native";
import Paragraph from "../../components/Paragraph";

export default function ChapterName({ chapterName }) {
  return (
    <View style={styles.nameView}>
      {chapterName.split(" | ").map((name, index) => {
        return (
          <Paragraph
            font="comfortaa-regular"
            style={styles.nameText}
            key={"name-text-" + index}
          >
            {name}
          </Paragraph>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  nameView: {
    paddingBottom: 16,
  },
  nameText: {
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "500",
    fontSize: 17,
  },
});
