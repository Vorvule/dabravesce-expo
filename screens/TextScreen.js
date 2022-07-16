import * as React from "react";
import { ScrollView } from "react-native";

import { allAlbums } from "../albums/albums";
import Core from "./Core/Core";

export function TextScreen({ route }) {
  const menuScreenChapter = route.params;
  const defaultChapter = allAlbums[0].text[0].text[0];

  const chapter = menuScreenChapter || defaultChapter;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Core chapter={chapter} />
    </ScrollView>
  );
}
