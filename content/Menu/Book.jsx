import * as React from "react";
import { TouchableOpacity } from "react-native";

import Chapters from "./Chapters";
import MenuItem from "../../components/MenuItem";
import Block from "../../components/Block";

export default function Book({ book, keys }) {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <MenuItem>
        <TouchableOpacity onPress={handlePress}>
          <Block>{book.name}</Block>
        </TouchableOpacity>
      </MenuItem>

      {expanded && (
        <Chapters bookName={book.name} chapters={book.text} keys={keys} />
      )}
    </>
  );
}
