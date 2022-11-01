import { useWindowDimensions } from "react-native";

import Block from "./Block";

import { sizeFont } from "../../functions/device";
import { styles } from "../../styles/styles";

export default function Title({ children, styling }) {
  const { width, height } = useWindowDimensions();

  return (
    <Block styling={[styles.textTitle, sizeFont(width, height, 16, 18), styling]}>
      {children}
    </Block>
  );
}
