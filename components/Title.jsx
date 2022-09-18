import { Platform, StyleSheet } from "react-native";
import Block from "./Block";

export default function Title({ children, styling }) {
  return <Block styling={[styles.title, styling]}>{children}</Block>;
}

const styles = StyleSheet.create({
  title: {
    paddingVertical: 6,
    textAlign: "center",

    fontFamily: "comfortaa-bold",
    fontSize: 18,
    ...Platform.select({ native: { fontSize: 16 } }),
  },
});
