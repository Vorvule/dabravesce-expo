import * as React from "react";

import { Text } from "react-native";

import Chapters from "./Chapters";

export default function Book({ book, keys }) {
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <Text onPress={handlePress}>{book.name}</Text>
      {expanded && <Chapters chapters={book.text} keys={keys} />}
    </>
  );
}
