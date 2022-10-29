import * as React from "react";

import CoreContent from "./CoreContent";
import Screen from "../../components/Screen";

import { CoreValues } from "../../functions/CoreValues";

export function CoreScreen({ navigation, route }) {
  // route.params.keys got on Chapter menu item click
  const coreValues = CoreValues.getCoreValues(route.params?.keys);

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: coreValues.albumName });
  });

  return (
    <Screen>
      <CoreContent
        bookName={coreValues.bookName}
        chapter={coreValues.chapter}
      />
    </Screen>
  );
}
