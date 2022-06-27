import { allAlbums } from "../../albums/albums";

import { Daily } from "../RightColumn/Daily/Daily";
import { Util } from "./Util";

export class Keys {
  static getKeysFromUrl() {
    const params = new URLSearchParams(window.location.search);

    if (params.has("k")) {
      const parameters = params.get("k"); // 000110

      const keys = [
        Number.parseInt(parameters.slice(0, 2)),
        Number.parseInt(parameters.slice(2, 4)),
        Number.parseInt(parameters.slice(4, 6)),
      ];

      return this.keysAreValid(keys) && keys;
    }
  }

  static pushIntoHistory(keys) {
    window.history.pushState({}, document.title, this.getPath(keys));
  }

  static getInitial() {
    const urlKeys = this.getKeysFromUrl();
    const dailyKeys = Daily.getDailyKeys();

    return urlKeys || dailyKeys;
  }

  // helpers:

  static keysAreValid(keys) {
    try {
      return this.verifyKeys(keys);
    } catch {}
  }

  static getPath(keys) {
    const [albumIndex, bookIndex, chapterIndex] = keys;

    const searchKeys =
      Util.pairIndex(albumIndex) +
      Util.pairIndex(bookIndex) +
      Util.pairIndex(chapterIndex);

    return "index.html?k=" + searchKeys;
  }

  static verifyKeys(keys) {
    const [albumKey, bookKey, chapterKey] = keys;
    return allAlbums[albumKey].text[bookKey].text[chapterKey].text;
  }
}
