import { StyleSheet, Text } from "react-native";

export default function Txt({ content }) {
  return <Text style={styles.txt}>{content}</Text>;
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 16,
    textIndent: 36,
    lineHeight: 24,
    marginBottom: 15,
  },
});
