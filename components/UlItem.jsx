import { StyleSheet, Text } from "react-native";


export default function UlItem({ content }) {
  return (
    <Text
      style={styles.getStartedText}
      lightColor="rgba(0,0,0,0.8)"
      darkColor="rgba(255,255,255,0.8)"
    >
      {"•\t" + content + "\n"}
    </Text>
  );
}

const styles = StyleSheet.create({
  getStartedText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
