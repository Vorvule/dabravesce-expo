import { allAlbums } from "../../albums/albums";

export class CoreContent {
  static albumName(params) {
    const keys = params?.keys || "0-0-0";
    const albumIndex = keys.split("-")[0];
    const albumName = allAlbums[albumIndex].name;

    return albumName;
  }

  static defaultChapter() {
    return allAlbums[0].text[0].text[0];
  }
}
