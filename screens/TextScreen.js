import * as React from "react";
import { ScrollView } from "react-native";

import Core from "./Core/Core";
import { CoreContent } from "./TextScreen/CoreContent";

export function TextScreen({ navigation, route }) {
  const menuParams = route.params; // on menu line click
  const chapter = menuParams || CoreContent.defaultChapter();

  const names = CoreContent.getBookAndAlbumNames(menuParams);
  const albumName = names.albumName;
  const bookName = names.bookName;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: albumName,
    });
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Core chapter={chapter} bookName={bookName} />
    </ScrollView>
  );
}
