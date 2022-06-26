import { StyleSheet, Text } from "react-native";

export default function UlText({ content }) {
  return (
    <Text
      style={styles.paragraph}
    >
      {"\t" + content + "\n"}
    </Text>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
});
