import { StyleSheet, Text, useWindowDimensions } from "react-native";

export default function Block({ children, styling }) {
  const { height, width } = useWindowDimensions();
  const deviceIsMobile = width < 900 || height < 900;
  const fontSize = deviceIsMobile ? { fontSize: 14 } : { fontSize: 16 };

  return <Text style={[styles.text, fontSize, styling]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "comfortaa-regular",
    lineHeight: 24,
    paddingVertical: 6,
  },
});
