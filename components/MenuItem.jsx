import { StyleSheet } from "react-native";
import Block from "./Block";

export default function MenuItem({ children, styling }) {
  return <Block styling={[styles.item, styling]}>{children}</Block>;
}

const styles = StyleSheet.create({
  item: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
});
