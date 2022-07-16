import { StyleSheet, Text, View } from "react-native";

export default function ChapterText({ chapterText }) {

  return (
    <View style={styles.view}>
      <Text style={styles.name}>{chapterText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: "100%",
    maxWidth: 800,
    alignSelf: "center",
    padding: 16,

    backgroundColor: "lightgreen",
  },
  name: {
    textAlign: "center",
  },
});
