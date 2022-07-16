import * as React from "react";
import { ScrollView } from "react-native";

import Core from "./Core/Core";

export function TextScreen({ route }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Core chapter={route.params} />
    </ScrollView>
  );
}
