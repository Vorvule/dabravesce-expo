import { Acathisti } from "./Acathisti";
import { Canons } from "./Canons";
import { Liturgy } from "./Liturgy";

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
