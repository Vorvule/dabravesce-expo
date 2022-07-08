import * as React from "react";

import { Text } from "react-native";

import Books from "./Books";

export default function Album({ album, keys }) {
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <Text onPress={handlePress}>{album.name}</Text>
      {expanded && (
        <Books books={album.text} keys={keys} navigation={navigation} />
      )}
    </>
  );
}
