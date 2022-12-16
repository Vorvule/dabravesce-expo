import { useState } from "react";

import Books from "./Books";
import MenuItem from "../components/MenuItem";

export default function Album({ album, keys }) {
  const [expanded, setExpanded] = useState(false);

  const onPress = () => setExpanded(!expanded);

  return (
    <>
      <MenuItem onPress={onPress}>{album.name}</MenuItem>

      {expanded && <Books books={album.text} keys={keys} />}
    </>
  );
}
