import * as React from "react";
import { Platform, ScrollView, View } from "react-native";

import { styles } from "../../styles/styles";

export default function Screen({ children }) {
  return (
    <ScrollView
      style={styles.screenContainer}
      {...Platform.select({ web: { showsVerticalScrollIndicator: false } })}
    >
      <View style={styles.screenContent}>{children}</View>
    </ScrollView>
  );
}
