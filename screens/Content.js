import { ScrollView, StyleSheet } from "react-native";

import Menu from "../components/Menu/Menu";

export function Content({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Menu navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "lightgreen",
  },
});
