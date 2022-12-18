import { useEffect, useState } from "react";

import Books from "./Books";
import MenuItem from "../components/MenuItem";
import { MenuPage } from "../../functions/MenuPage";

export default function Album({ album, keys }) {
  const [expanded, setExpanded] = useState(false);

  const styler = MenuPage.styler(keys);
  
  const onPress = () => setExpanded(!expanded);

  useEffect(() => {
    styler.color && setExpanded(true);
  }, []);

  return (
    <>
      <MenuItem onPress={onPress} styler={MenuPage.styler(keys)}>
        {album.name}
      </MenuItem>

      {expanded && <Books books={album.text} keys={keys} />}
    </>
  );
}
