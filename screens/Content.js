import { ScrollView, View, StyleSheet } from "react-native";

import Menu from "../components/Menu/Content";

export function Content() {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.scrollView}
    >
      <Menu />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    maxWidth: 800,
    margin: 20,
    alignSelf: "center",
    padding: 20,
  },
  contentContainer: {
    backgroundColor: "lightgrey",
  },
});
