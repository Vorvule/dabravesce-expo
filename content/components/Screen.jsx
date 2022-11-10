import * as React from "react";
import { ScrollView, View } from "react-native";

import { styles } from "../../styles/styles";
import { showsVerticalScrollIndicator } from "../../functions/device";

export default function Screen({ children }) {

  return (
    <ScrollView
      style={styles.screenContainer}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator()}
    >
      <View style={styles.screenContent}>{children}</View>
    </ScrollView>
  );
}
