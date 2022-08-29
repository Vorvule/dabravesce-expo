import * as React from "react";

import { TouchableOpacity } from "react-native";

import Books from "./Books";
import MenuItem from "../../components/MenuItem";
import Paragraph from "../../components/Paragraph";

export default function Album({ album, keys }) {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <MenuItem>
        <TouchableOpacity onPress={handlePress}>
          <Paragraph>{album.name}</Paragraph>
        </TouchableOpacity>
      </MenuItem>

      {expanded && <Books books={album.text} keys={keys} />}
    </>
  );
}
