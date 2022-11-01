import { Text, useWindowDimensions } from "react-native";

import { sizeFont } from "../../functions/device";
import { styles } from "../../styles/styles";

export default function Block({ children, styling }) {
  const { width, height } = useWindowDimensions();

  return (
    <Text style={[styles.textBlock, sizeFont(width, height, 14, 16), styling]}>
      {children}
    </Text>
  );
}
