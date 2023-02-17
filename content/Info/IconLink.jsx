import { Linking, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Block from "../components/Block";

import { styles } from "../../styles/styles";
import { DeviceSpecific } from "../../functions/DeviceSpecific";

export function IconLink({ iconUrl, iconName, children }) {
  const { fontSize } = DeviceSpecific.sizedFont(24, 22);

  return (
    <TouchableOpacity onPress={() => Linking.openURL(iconUrl)}>
      <View style={styles.linkView}>
        <AntDesign name={iconName} size={fontSize} style={styles.linkIcon} />
        <Block styler={styles.highlight}>{children}</Block>
      </View>
    </TouchableOpacity>
  );
}
