import * as React from "react";

import { Text } from "react-native";

import ChapterList from "./ChapterList";

export default function Book({ book, keys }) {
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <Text onPress={handlePress}>{book.name}</Text>
      {expanded && <ChapterList chapters={book.text} keys={keys} />}
    </>
  );
}
