import * as React from "react";

import { TouchableOpacity } from "react-native";

import Books from "./Books";
import MenuItem from "../../components/MenuItem";
import Block from "../../components/Block";

export default function Album({ album, keys }) {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <TouchableOpacity onPress={handlePress}>
        <MenuItem>
          <Block>{album.name}</Block>
        </MenuItem>
      </TouchableOpacity>

      {expanded && <Books books={album.text} keys={keys} />}
    </>
  );
}
