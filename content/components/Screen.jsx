import * as React from "react";
import { ScrollView, View } from "react-native";

import { DeviceSpecific } from "../../functions/DeviceSpecific";
import { styles } from "../../styles/styles";

export default function Screen({ children }) {
  return (
    <ScrollView
      style={styles.screenContainer}
      showsVerticalScrollIndicator={DeviceSpecific.deviceIsMobile()}
    >
      <View style={styles.screenContent}>{children}</View>
    </ScrollView>
  );
}
