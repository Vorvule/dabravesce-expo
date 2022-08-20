import { allAlbums } from "../../albums/albums";

export class CoreContent {
  static getBookAndAlbumNames(params) {
    const keys = params?.keys || "0-0-0";

    const indexes = keys.split("-");
    const albumIndex = indexes[0];
    const bookIndex = indexes[1];

    const albumName = allAlbums[albumIndex].name;
    const bookName = allAlbums[albumIndex].text[bookIndex].name;

    return { albumName, bookName };
  }

  static defaultChapter() {
    return allAlbums[0].text[0].text[0];
  }
}
