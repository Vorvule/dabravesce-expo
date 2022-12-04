import * as React from "react";
import { ScrollView, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import CoreContent from "./CoreContent";
import { CoreValues } from "../../functions/CoreValues";
import { DeviceSpecific } from "../../functions/DeviceSpecific";

import { styles } from "../../styles/styles";


export function CoreScreen({ navigation, route }) {
  const routeKeys = route.params?.keys; // rendered on menu item click
  const coreValues = CoreValues.getCoreValues(routeKeys);

  const scrollViewRef = React.useRef();
  const currentKeys = React.useRef("");

  useFocusEffect(() => {
    if (currentKeys.current != routeKeys) {
      currentKeys.current = routeKeys;
      scrollViewRef.current.scrollTo({ y: 0 });
    }
  });

  React.useEffect(() => {
    navigation.setOptions({ title: coreValues.albumName });
  });

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.screenContainer}
      showsVerticalScrollIndicator={DeviceSpecific.deviceIsMobile()}
    >
      <View style={styles.screenContent}>
        <CoreContent
          bookName={coreValues.bookName}
          chapter={coreValues.chapter}
        />
      </View>
    </ScrollView>
  );
}
