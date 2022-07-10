import * as React from "react";
import { Text } from "react-native";

import Paragraph from "../../components/Paragraph";
import Chapters from "./Chapters";

export default function Book({ book, keys, navigation }) {
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <Text onPress={handlePress}>
        <Paragraph>{book.name}</Paragraph>
      </Text>
      {expanded && (
        <Chapters chapters={book.text} keys={keys} navigation={navigation} />
      )}
    </>
  );
}
