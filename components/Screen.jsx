import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export function Screen({ children }) {
  return (
    <ScrollView
      style={styles.screen}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.content}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    maxWidth: 800,
    alignSelf: "center",
    padding: 14,
  },
  content: {
    paddingBottom: 36,
  }
});
