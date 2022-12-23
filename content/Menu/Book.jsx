import { useEffect, useState } from "react";

import Chapters from "./Chapters";
import MenuItem from "../components/MenuItem";

import { MenuPage } from "../../functions/MenuPage";

export default function Book({ book, keys, folding }) {
  const [expanded, setExpanded] = useState(false);
  const [unfolded, setUnfolded] = folding;

  const styler = MenuPage.styler(keys);

  const onPress = () => {
    equal(unfolded, keys) ? setExpanded(!expanded) : setUnfolded(keys);
  };

  useEffect(() => {
    setExpanded(equal(unfolded, keys));
  }, [unfolded]);

  return (
    <>
      <MenuItem onPress={onPress} styler={styler}>
        {book.name}
      </MenuItem>

      {expanded && <Chapters chapters={book.text} keys={keys} />}
    </>
  );
}

const equal = (unfolded, keys) => {
  return unfolded[0] == keys[0] && unfolded[1] == keys[1];
};
