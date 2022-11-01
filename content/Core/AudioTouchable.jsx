import * as React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { styles } from "../../styles/styles";

export default function AudioTouchable({ name, onPress, active }) {
  const color = active ? "teal" : "gray";

  return (
    <TouchableOpacity style={styles.audioTouchable} onPress={onPress}>
      <FontAwesome name={name} size={15} color={color} />
    </TouchableOpacity>
  );
}
