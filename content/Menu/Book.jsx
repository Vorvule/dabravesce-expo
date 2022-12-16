import { useState } from "react";

import Chapters from "./Chapters";
import MenuItem from "../components/MenuItem";

export default function Book({ book, keys }) {
  const [expanded, setExpanded] = useState(false);

  const onPress = () => setExpanded(!expanded);

  return (
    <>
      <MenuItem onPress={onPress}>{book.name}</MenuItem>

      {expanded && (
        <Chapters bookName={book.name} chapters={book.text} keys={keys} />
      )}
    </>
  );
}
