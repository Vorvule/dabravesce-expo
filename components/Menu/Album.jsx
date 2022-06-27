import * as React from "react";

import { Text } from "react-native";

import BookList from "./BookList";

export default function Album({ album, keys }) {
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <Text onPress={handlePress}>{album.name}</Text>
      {expanded && <BookList books={album.text} keys={keys} />}
    </>
  );
}
