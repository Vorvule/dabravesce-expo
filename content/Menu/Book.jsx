import { useEffect, useState } from "react";

import Chapters from "./Chapters";
import MenuItem from "../components/MenuItem";

import { MenuPage } from "../../functions/MenuPage";

export default function Book({ book, keys }) {
  const [expanded, setExpanded] = useState(false);

  const styler = MenuPage.styler(keys);

  const onPress = () => setExpanded(!expanded);

  useEffect(() => {
    styler.color && setExpanded(true);
  }, []);

  return (
    <>
      <MenuItem onPress={onPress} styler={styler}>
        {book.name}
      </MenuItem>

      {expanded && <Chapters chapters={book.text} keys={keys} />}
    </>
  );
}
