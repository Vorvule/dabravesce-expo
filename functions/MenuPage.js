import { useContext } from "react";
import { ChainContext } from "../content/AppNavigation";

export class MenuPage {
  static styler(key, keys) {
    const chain = useContext(ChainContext).chain;

    let active;
    switch (keys.length) {
      case 0:
        active = key == chain[0];
        break;
      case 1:
        active = keys[0] == chain[0] && key == chain[1];
        break;
      case 2:
        active = keys[0] == chain[0] && keys[1] == chain[1] && key == chain[2];
    }

    return active ? { color: "teal" } : {};
  }
}
