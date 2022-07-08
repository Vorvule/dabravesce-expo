import { StyleSheet, View } from "react-native";

import Chapter from "./Chapter";

export default function Chapters({ chapters, keys }) {
  return chapters.map((chapter, key) => {
    return (
      <View style={styles.view} key={"chapter-" + key}>
        <Chapter
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
    paddingLeft: 18,
  },
});
