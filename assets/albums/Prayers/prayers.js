import { Daily } from "./Daily";
import { Easter } from "./Easter";
import { Housel } from "./Housel";

export const prayers = {
  name: "Малітоўнік",
  idBe: "Малітоўнік",
  idEn: "Prayers",
  text: [
    {
      name: "Малітвы штодзённыя",
      idBe: "Мал. штодз.",
      idEn: "Daily",
      text: Daily,
    },
    {
      name: "Малітвы прычашчэння",
      idBe: "Мал. прыч.",
      idEn: "Housel",
      text: Housel,
    },
    {
      name: "Малітвы велікодныя",
      idBe: "Мал. велік.",
      idEn: "Easter",
      text: Easter,
    },
  ],
};
