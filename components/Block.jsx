import { StyleSheet, Text, useWindowDimensions } from "react-native";

import { sizeFont } from "../functions/device";

export default function Block({ children, styling }) {
  const { width, height } = useWindowDimensions();

  return (
    <Text style={[styles.text, sizeFont(width, height, 14, 16), styling]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "comfortaa-regular",
    lineHeight: 24,
    paddingVertical: 6,
  },
});
