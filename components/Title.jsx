import { StyleSheet } from "react-native";
import Block from "./Block";

export default function Title({ children, styling }) {
  return <Block styling={[styles.title, styling]}>{children}</Block>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "comfortaa-bold",
    textAlign: "center",
    paddingVertical: 6,
  },
});
