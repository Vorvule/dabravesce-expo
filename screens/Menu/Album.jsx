import * as React from "react";
import { Text } from "react-native";

import Books from "./Books";
import MenuItem from "../../components/MenuItem";
import Paragraph from "../../components/Paragraph";

export default function Album({ album, keys, navigation }) {
  const [expanded, setExpanded] = React.useState(false);
  
  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <MenuItem>
        <Text onPress={handlePress} /*style={text}*/>
          <Paragraph>{album.name}</Paragraph>
        </Text>
      </MenuItem>

      {expanded && (
        <Books books={album.text} keys={keys} navigation={navigation} />
      )}
    </>
  );
}