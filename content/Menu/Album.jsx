import { useState } from "react";

import Books from "./Books";
import MenuItem from "../components/MenuItem";

export default function Album({ album, keys, styler }) {
  const [expanded, setExpanded] = useState(false);

  const onPress = () => setExpanded(!expanded);

  return (
    <>
      <MenuItem styler={styler} onPress={onPress}>
        {album.name}
      </MenuItem>

      {expanded && <Books books={album.text} keys={keys} />}
    </>
  );
}
