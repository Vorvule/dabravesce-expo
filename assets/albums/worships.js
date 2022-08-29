import { Acathisti } from "./Prayers/Acathisti";
import { Canons } from "./Prayers/Canons";
import { Liturgy } from "./Prayers/Liturgy";

export const worships = {
  name: "Богаслужэнні",
  idBe: "Богаслужэнні",
  idEn: "Worship",
  text: [
    {
      name: "Літургія",
      idBe: "Літургія",
      idEn: "Liturgy",
      text: Liturgy,
    },
    {
      name: "Каноны",
      idBe: "Каноны",
      idEn: "Canons",
      text: Canons,
    },
    {
      name: "Акафісты",
      idBe: "Акафісты",
      idEn: "Acathisti",
      text: Acathisti,
    },
  ],
};
