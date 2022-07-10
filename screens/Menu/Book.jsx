import * as React from "react";
import { Text } from "react-native";

import Chapters from "./Chapters";
import MenuItem from "../../components/MenuItem";
import Paragraph from "../../components/Paragraph";

export default function Book({ book, keys, navigation }) {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <MenuItem>
        <Text onPress={handlePress}>
          <Paragraph>{book.name}</Paragraph>
        </Text>
      </MenuItem>
      
      {expanded && (
        <Chapters chapters={book.text} keys={keys} navigation={navigation} />
      )}
    </>
  );
}
