import { StyleSheet, Text } from "react-native";

export default function Paragraph({ children, customStyles }) {
  return (
    <Text style={[styles.commonStyle, customStyles]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  commonStyle: {
    fontSize: 16,
    lineHeight: 32,
    fontFamily: "comfortaa-regular",
  },
});
