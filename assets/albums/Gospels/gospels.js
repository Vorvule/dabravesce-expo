import { John } from "./John";
import { Luke } from "./Luke";
import { Mark } from "./Mark";
import { Matthew } from "./Matthew";

export const gospels = {
  name: "Евангеллі",
  idBe: "Евангеллі",
  idEn: "Gospels",
  text: [
    {
      name: "Святое Дабравесце паводле Матфея",
      idBe: "Мф.",
      idEn: "Mattew",
      text: Matthew,
    },
    {
      name: "Святое Дабравесце паводле Марка",
      idBe: "Мк.",
      idEn: "Mark",
      text: Mark,
    },
    {
      name: "Святое Дабравесце паводле Лукі",
      idBe: "Лк.",
      idEn: "Luke",
      text: Luke,
    },
    {
      name: "Святое Дабравесце паводле Іаана",
      idBe: "Ін.",
      idEn: "John",
      text: John,
    },
  ],
};
