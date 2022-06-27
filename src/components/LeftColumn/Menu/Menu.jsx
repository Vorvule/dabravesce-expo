import React from "react";

import { allAlbums } from "../../../albums/albums";

import { MenuAlbumList } from "./MenuAlbumList";

export const Menu = () => (
  <ul className="w3-ul">
    <MenuAlbumList albumList={allAlbums} />
  </ul>
);
