import { StyleSheet, View } from "react-native";

import Chapter from "./Chapter";

export default function Chapters({ bookName, chapters, keys, navigation }) {
  return chapters.map((chapter, key) => {
    return (
      <View style={styles.view} key={"chapter-" + key}>
        <Chapter
          bookName={bookName}
          chapter={chapter}
          keys={keys + "-" + key}
          navigation={navigation}
        />
      </View>
    );
  });
}

const styles = StyleSheet.create({
  view: {
    paddingLeft: 16,
  },
});
