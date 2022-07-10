import { ScrollView, StyleSheet } from "react-native";

import Menu from "./Menu/Menu";

export function MenuScreen({ navigation }) {
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
