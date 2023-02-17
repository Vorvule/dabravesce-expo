import { Linking, TouchableOpacity, View } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

import Block from "../components/Block";

import { Constants } from "../../functions/Constants";
import { styles } from "../../styles/styles";
import { DeviceSpecific } from "../../functions/DeviceSpecific";

export function TextLinks() {
  const { fontSize } = DeviceSpecific.sizedFont(24, 22);

  return (
    <>
      <TouchableOpacity
        onPress={() => Linking.openURL(Constants.urls.playMarket)}
      >
        <View style={styles.linkView}>
          <AntDesign name="android" size={fontSize} style={styles.linkIcon} />
          <Block styler={styles.highlight}>Дачыненне Android</Block>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL(Constants.urls.eMail)}>
        <View style={styles.linkView}>
          <SimpleLineIcons
            name="envelope-letter"
            size={fontSize}
            style={styles.linkIcon}
          />
          <Block styler={styles.highlight}>Ліст распрацоўшчыкам</Block>
        </View>
      </TouchableOpacity>
    </>
  );
}
