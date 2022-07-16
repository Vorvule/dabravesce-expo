import * as React from "react";
import { ScrollView } from "react-native";

import { allAlbums } from "../albums/albums";
import Core from "./Core/Core";

export function TextScreen({ navigation, route }) {
  const menuScreenChapter = route.params;
  const defaultChapter = allAlbums[0].text[0].text[0];

  let keys;
  try {
    keys = menuScreenChapter.keys;
  } catch {
    keys = "0-0-0";
  }
  const albumIndex = keys.split("-")[0];
  const albumName = allAlbums[albumIndex].name;

  const chapter = menuScreenChapter || defaultChapter;

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
      <Core chapter={chapter} />
    </ScrollView>
  );
}
