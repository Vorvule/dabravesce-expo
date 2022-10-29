import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

export default function AudioTouchable({ name, onPress, active }) {
  const color = active ? "teal" : "gray"
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress}>
      <FontAwesome name={name} size={15} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    margin: 16,

    padding: 12,
    paddingLeft: 14,
    height: 41,
    width: 41,

    borderRadius: 4,
    borderWidth: 1,
    borderColor: "teal",
  },
});
