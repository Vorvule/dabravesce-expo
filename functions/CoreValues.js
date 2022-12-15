import { allAlbums } from "../assets/albums/albums";
import { DailyKeys } from "./DailyKeys";

export class CoreValues {
  static getCoreContents(paramsKeys) {
    const keys = paramsKeys ? paramsKeys : DailyKeys.getDailyKeys();

    const albumKey = keys[0];
    const bookKey = keys[1];
    const chapterKey = keys[2];

    const albumName = allAlbums[albumKey].name;
    const bookName = allAlbums[albumKey].text[bookKey].name;
    const chapter = allAlbums[albumKey].text[bookKey].text[chapterKey];

    return { albumName, bookName, chapter };
  }

  static chainsAreSame(first, second) {
    return (
      first[0] == second[0] && first[1] == second[1] && first[2] == second[2]
    );
  }
}
