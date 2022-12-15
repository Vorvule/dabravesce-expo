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
  const refChain = useRef([-1, -1, -1]);

  useFocusEffect(() => {
    if (!CoreValues.chainsAreSame(refChain.current, route.params.chain)) {
      refChain.current = route.params.chain;

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
