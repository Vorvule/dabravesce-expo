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
      <TouchableOpacity onPress={handlePress}>
        <MenuItem>
          <Block>{book.name}</Block>
        </MenuItem>
      </TouchableOpacity>

      {expanded && (
        <Chapters bookName={book.name} chapters={book.text} keys={keys} />
      )}
    </>
  );
}
