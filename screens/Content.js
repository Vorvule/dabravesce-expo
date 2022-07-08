import { ScrollView, StyleSheet } from "react-native";

import Menu from "../components/Menu/Menu";

export function Content({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.scrollView}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Menu navigation={navigation} />
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
