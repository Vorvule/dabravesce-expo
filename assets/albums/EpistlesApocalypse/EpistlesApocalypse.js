import { ApocalypseContent } from "./ApocalypseContent";
import { EpistlesContent } from "./EpistlesContent";

export const epistlesApocalypse = {
  name: "Пасланні Апосталаў і Апакаліпсіс",
  idEn: "ApostlesApocalypse",
  text: [
    ...EpistlesContent,
    {
      name: "Апака́ліпсіс, або Адкраве́нне святога Апостала Іаана Багаслова",
      idBe: "Апак.",
      idEn: "Apoc",
      text: ApocalypseContent,
    },
  ],
};
