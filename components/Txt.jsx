import { StyleSheet, Text } from "react-native";

export default function Txt({ content }) {
  return <Text style={styles.text}>{content}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textIndent: 36,
    lineHeight: 24,
    marginBottom: 15,
  },
});
