import { GreatCanon } from "./GreatCanon";
import { Acathisti } from "./Acathisti";
import { Canons } from "./Canons";
import { Liturgy } from "./Liturgy";

export const worships = {
  name: "Богаслужэнні",
  idEn: "Worship",
  text: [
    {
      name: "Акафісты",
      idEn: "Acathisti",
      text: Acathisti,
    },
    {
      name: "Вялікі канон прападобнага айца нашага Андрея Крыцкага і Іерусалімскага",
      idEn: "Great Canon",
      text: GreatCanon,
    },
    {
      name: "Каноны",
      idEn: "Canons",
      text: Canons,
    },
    {
      name: "Літургія",
      idEn: "Liturgy",
      text: Liturgy,
    },
  ],
};
