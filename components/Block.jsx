import { Platform, StyleSheet, Text } from "react-native";

export default function Block({ children, styling }) {
  return <Text style={[styles.text, styling]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "comfortaa-regular",
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 6,
    ...Platform.select({
      native: {
        fontSize: 14
      }
    })
  },
});
