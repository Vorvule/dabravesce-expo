import { TouchableOpacity, View } from "react-native";

import Block from "./Block";
import { styles } from "../../styles/styles";

export default function MenuItem({ children, styler, onPress }) {
  return (
    <View style={styles.menuItemBorder}>
      <TouchableOpacity onPress={onPress}>
        <Block styler={[styles.menuItemBlock, styler]}>{children}</Block>
      </TouchableOpacity>
    </View>
  );
}
