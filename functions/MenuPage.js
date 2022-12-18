import { useContext } from "react";
import { ChainContext } from "../content/AppNavigation";

export class MenuPage {
  static styler(key, keys) {
    return this.active(key, keys) ? { color: "teal" } : {};
  }

  static active(key, keys) {
    const chain = useContext(ChainContext).chain;

    switch (keys.length) {
      case 0:
        return key == chain[0];
      case 1:
        return keys[0] == chain[0] && key == chain[1];
      case 2:
        return keys[0] == chain[0] && keys[1] == chain[1] && key == chain[2];
      default:
        return false;
    }
  }
}
