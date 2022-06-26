import { StyleSheet, Text } from "react-native";

export default function Title({ content }) {
  return <Text style={styles.title}>{content}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginVertical: 20,
  },
});
