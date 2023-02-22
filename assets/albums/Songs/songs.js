import { Christmas } from "./Christmas";
import { Easters } from "./Easters";
// import { Folk } from "./Folk";
import { Prayal } from "./Prayal";

export const songs = {
  name: "Духоўныя Спевы",
  idBe: "Спевы",
  idEn: "Songs",
  text: [
    {
      name: "Велікодныя спевы",
      idEn: "Easters",
      text: Easters,
    },
    {
      name: "Калядныя спевы",
      idEn: "Christmas",
      text: Christmas,
    },
    {
      name: "Малітоўныя спевы",
      idEn: "Prayal",
      text: Prayal,
    },
    // {
    //   name: "Народныя спевы",
    //   idEn: "Folk",
    //   text: Folk,
    // },
  ],
};
