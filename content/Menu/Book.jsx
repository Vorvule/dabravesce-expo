import * as React from "react";

import Chapters from "./Chapters";
import MenuItem from "../../components/MenuItem";

export default function Book({ book, keys }) {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <>
        <MenuItem onPress={handlePress}>{book.name}</MenuItem>

      {expanded && (
        <Chapters bookName={book.name} chapters={book.text} keys={keys} />
      )}
    </>
  );
}
