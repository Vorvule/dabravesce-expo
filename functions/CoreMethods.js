import { allAlbums } from "../assets/albums/albums";
import { Daily } from "./Daily";

export class CoreMethods {
  static getCoreValues(paramsKeys) {
    const keys = paramsKeys ? paramsKeys.split("-") : Daily.getDailyKeys();

    const albumKey = keys[0];
    const bookKey = keys[1];
    const chapterKey = keys[2];

    const albumName = allAlbums[albumKey].name;
    const bookName = allAlbums[albumKey].text[bookKey].name;
    const chapter = allAlbums[albumKey].text[bookKey].text[chapterKey];

    return { albumName, bookName, chapter };
  }
}
