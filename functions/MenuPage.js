import { useContext } from "react";

import { ChainContext } from "../content/contexts/ChainContext";

import { styles } from "../styles/styles";

export class MenuPage {
  static styler(keys) {
    return this.active(keys) ? styles.highlight : {};
  }

  static active(keys) {
    const chain = useContext(ChainContext).chain;

    switch (keys.length) {
      case 1:
        return keys[0] == chain[0];
      case 2:
        return keys[0] == chain[0] && keys[1] == chain[1];
      case 3:
        return keys[0] == chain[0] && keys[1] == chain[1] && keys[2] == chain[2];
      default:
        return false;
    }
  }

  static clear(text) {
    return text.replace(/ \| .+/, "");
  }
}
