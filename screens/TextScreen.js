import * as React from "react";
import { ScrollView } from "react-native";

import Core from "./Core/Core";
import { CoreContent } from "./TextScreen/CoreContent";

export function TextScreen({ navigation, route }) {
  const params = route.params;

  const chapter = params || CoreContent.defaultChapter();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: CoreContent.albumName(params),
    });
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Core chapter={chapter} />
    </ScrollView>
  );
}
