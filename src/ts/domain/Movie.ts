import type { Viewable } from "../../types";

export default class Movie implements Viewable {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly subtitle: string,
    readonly cover: string,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string[],
    readonly duration: number
  ) {}
}
