import { useState } from "react";

import Chapters from "./Chapters";
import MenuItem from "../components/MenuItem";

export default function Book({ book, keys, styling }) {
  const [expanded, setExpanded] = useState(false);

  const onPress = () => setExpanded(!expanded);

  return (
    <>
      <MenuItem onPress={onPress} styling={styling}>
        {book.name}
      </MenuItem>

      {expanded && (
        <Chapters bookName={book.name} chapters={book.text} keys={keys} />
      )}
    </>
  );
}
