import * as React from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";

export default function Screen({ children }) {
  return (
    <ScrollView
      style={styles.screen}
      {...Platform.select({ web: { showsVerticalScrollIndicator: false } })}
    >
      <View style={{ paddingBottom: 48 }}>{children}</View>
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
});
