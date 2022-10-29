import * as React from "react";

import CoreContent from "./CoreContent";
import Screen from "../../components/Screen";

import { CoreMethods } from "../../functions/CoreMethods";

export function Core({ navigation, route }) {
  // route object with params and keys comes on Chapter menu item click
  const coreValues = CoreMethods.getCoreValues(route.params?.keys);

  const albumName = coreValues.albumName;
  const bookName = coreValues.bookName;
  const chapter = coreValues.chapter;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: albumName,
    });
  });

  return (
    <Screen>
      <CoreContent chapter={chapter} bookName={bookName} />
    </Screen>
  );
}
