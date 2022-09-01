import * as React from "react";
import { Screen } from "../../components/Screen";

import CoreContent from "./CoreContent";
import { CoreMethods } from "./CoreMethods";

export function Core({ navigation, route }) {
  // route params come from menu on menu item click
  const chapter = route.params || CoreMethods.defaultChapter();
  const coreNames = CoreMethods.getBookAndAlbumNames(route.params);

  const albumName = coreNames.albumName;
  const bookName = coreNames.bookName;

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
