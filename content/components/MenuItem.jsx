import { TouchableOpacity, View } from "react-native";

import Block from "./Block";
import { styles } from "../../styles/styles";

export default function MenuItem({ children, styling, onPress }) {
  return (
    <View style={styles.menuItemBorder}>
      <TouchableOpacity onPress={onPress}>
        <Block styling={[styles.menuItemBlock, styling]}>{children}</Block>
      </TouchableOpacity>
    </View>
  );
}
