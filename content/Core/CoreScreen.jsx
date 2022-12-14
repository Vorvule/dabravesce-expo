import { useEffect, useRef } from "react";
import { ScrollView, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import CoreContent from "./CoreContent";
import { CoreValues } from "../../functions/CoreValues";
import { DeviceSpecific } from "../../functions/DeviceSpecific";

import { styles } from "../../styles/styles";

export function CoreScreen({ navigation, route }) {
  console.log(route);
  const coreContents = CoreValues.getCoreContents(route.params.chain);
  
  const scrollViewRef = useRef();
  const currentKeys = useRef([-1, -1, -1]);

  useFocusEffect(() => {
    if (coreContentChanged(currentKeys.current, route.params.chain)) {
      currentKeys.current = route.params.chain;
      scrollViewRef.current.scrollTo({ y: 0 });
    }
  });

  useEffect(() => {
    navigation.setOptions({ title: coreContents.albumName });
  });

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.screenContainer}
      showsVerticalScrollIndicator={DeviceSpecific.deviceIsMobile()}
    >
      <View style={styles.screenContent}>
        <CoreContent
          bookName={coreContents.bookName}
          chapter={coreContents.chapter}
        />
      </View>
    </ScrollView>
  );
}

const coreContentChanged = (prev, next) => {
  return prev[0] != next[0] || prev[1] != next[1] || prev[2] != next[2];
}
