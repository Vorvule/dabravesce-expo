export class MenuPage {
  static styler(chain, key, keys) {
    let active;

    if (!keys) {
      active = key == chain[0];
    } else if (!keys[1]) {
      active = keys[0] == chain[0] && key == chain[1];
    } else {
      active = keys[0] == chain[0] && keys[1] == chain[1] && key == chain[2];
    }

    return active ? { color: "teal" } : {};
  }
}
