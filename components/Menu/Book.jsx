import * as React from "react";

import { StyleSheet, Text, View } from "react-native";

import ChapterList from "./ChapterList";

export default function Book({ book }) {
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <Text onPress={handlePress}>{book.name}</Text>
      {expanded && (
        <View style={styles.view}>
          <ChapterList chapters={book.text} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingLeft: 18,
  },
});
