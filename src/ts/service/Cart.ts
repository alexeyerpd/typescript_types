import type { Buyable, Viewable } from "../../types/";

export default class Cart {
  private _items: (Buyable | Viewable)[] = [];

  add(item: Buyable | Viewable): void {
    this._items.push(item);
  }

  get items(): (Buyable | Viewable)[] {
    return [...this._items];
  }
}
