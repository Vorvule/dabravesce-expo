import { StyleSheet, Text, View } from "react-native";

export default function ChapterName({ chapterName }) {
  return (
    <View style={styles.nameView}>
      {chapterName.split(" | ").map((name, index) => {
        return (
          <Text style={styles.nameText} key={"name-text-" + index}>
            {name}
          </Text>
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
