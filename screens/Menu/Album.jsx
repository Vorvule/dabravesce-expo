import * as React from "react";
import { Text } from "react-native";

import Paragraph from "../../components/Paragraph";
import Books from "./Books";

export default function Album({ album, keys, navigation }) {
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <Text onPress={handlePress} /*style={text}*/>
        <Paragraph>{album.name}</Paragraph>
      </Text>
      {expanded && (
        <Books books={album.text} keys={keys} navigation={navigation} />
      )}
    </>
  );
}
