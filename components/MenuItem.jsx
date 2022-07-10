import { StyleSheet, View } from "react-native";

export default function MenuItem({ children }) {
  return <View style={styles.item}>{children}</View>;
}

const styles = StyleSheet.create({
  item: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
  },
});
