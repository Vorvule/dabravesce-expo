import { ScrollView, View, StyleSheet } from "react-native";

import Menu from "../components/Menu/Menu";

export function Content() {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.scrollView}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Menu />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    alignSelf: "center",
    maxWidth: 800,
    padding: 16,
  },
  contentContainer: {
    backgroundColor: "lightgrey",
  },
});
