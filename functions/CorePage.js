import { allAlbums } from "../assets/albums/AllAlbums";
import { DailyKeys } from "./DailyKeys";

export class CorePage {
  static getContents(chain) {
    const keys = chain ? chain : DailyKeys.getDailyKeys();

    const [albumKey, bookKey, chapterKey] = keys;

    const albumName = allAlbums[albumKey].name;
    const bookName = allAlbums[albumKey].text[bookKey].name;
    const chapter = allAlbums[albumKey].text[bookKey].text[chapterKey];

    return { albumName, bookName, chapter };
  }

  static chainsAreSame(one, two) {
    return one[0] == two[0] && one[1] == two[1] && one[2] == two[2];
  }
}
