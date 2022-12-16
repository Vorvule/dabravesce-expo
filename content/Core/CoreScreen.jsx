import { useEffect, useRef } from "react";
import { ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { CorePage } from "../../functions/CorePage";
import { DeviceSpecific } from "../../functions/DeviceSpecific";
import { styles } from "../../styles/styles";

import CoreContent from "./CoreContent";

export function CoreScreen({ navigation, route }) {
  const routeChain = route.params.chain;
  const { albumName, bookName, chapter } = CorePage.getContents(routeChain);

  useFocusEffect(() => {
    if (!CorePage.chainsAreSame(chainRef.current, routeChain)) {
      chainRef.current = routeChain;

      scrollRef.current.scrollTo({ y: 0 });
    }
  });

  useEffect(() => {
    navigation.setOptions({ title: albumName });
  });

  const scrollRef = useRef();
  const chainRef = useRef([-1, -1, -1]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={DeviceSpecific.deviceIsMobile()}
      style={styles.screenContainer}
      ref={scrollRef}
    >
      <CoreContent bookName={bookName} chapter={chapter} />
    </ScrollView>
  );
}
