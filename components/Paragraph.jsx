import { StyleSheet, Text } from "react-native";

export default function Paragraph({ children, font }) {
  return (
    <Text style={[styles.commonStyle, { fontFamily: font }]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  commonStyle: {
    fontSize: 16,
    lineHeight: 24,
    // fontWeight: "600",
  },
});
