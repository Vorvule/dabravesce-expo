import { StyleSheet, TouchableOpacity, View } from "react-native";

import Block from "./Block";

export default function MenuItem({ children, styling, onPress }) {
  return (
    <View style={styles.border}>
      <TouchableOpacity onPress={onPress}>
        <Block styling={[styles.block, styling]}>{children}</Block>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  block: {
    paddingVertical: 12,
  },
});
