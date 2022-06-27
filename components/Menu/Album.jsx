import * as React from "react";

import { Text, View } from "react-native";

import BookList from "./BookList";

export default function Album({ album, key }) {
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <Text onPress={handlePress}>{album.name}</Text>
      {expanded && (
        <View>
          <BookList albumKey={key} books={album.text} />
        </View>
      )}
    </>
  );
}
