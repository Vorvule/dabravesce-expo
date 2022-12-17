import { useEffect, useState } from "react";

import Chapters from "./Chapters";
import MenuItem from "../components/MenuItem";

export default function Book({ book, keys, styler }) {
  const [expanded, setExpanded] = useState(false);

  const onPress = () => setExpanded(!expanded);

  useEffect(() => {
    styler.color && setExpanded(true);
  }, [styler]);

  return (
    <>
      <MenuItem onPress={onPress} styler={styler}>
        {book.name}
      </MenuItem>

      {expanded && <Chapters chapters={book.text} keys={keys} />}
    </>
  );
}
