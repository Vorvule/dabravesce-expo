import { StyleSheet, useWindowDimensions } from "react-native";

import Block from "./Block";

import { sizeFont } from "../../functions/device";

export default function Title({ children, styling }) {
  const { width, height } = useWindowDimensions();

  return (
    <Block styling={[styles.title, sizeFont(width, height, 16, 18), styling]}>
      {children}
    </Block>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingVertical: 6,
    textAlign: "center",
    fontFamily: "comfortaa-bold",
  },
});
