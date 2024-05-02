import {Item} from "./Item";

export class ShoppingCart {
  items: Item[] = [];
  price = 0;

  add = (price: number) => (this.price = price);

  calculateTotalPrice = () => this.price;

  numberOfProducts = () => 1;

  hasDiscount = () => this.price > 100;

  // Multiple items handling
  addMultipleItems = (items: Item[]) => {
    items.forEach(item => {
      this.items.push(item);
    });
  }

  calculateTotalPriceOfMultipleItems = () => {
    return this.items
        .map(item => item.price * item.count)
        .reduce((previousAccumulation, itemTotalPrice) => previousAccumulation + itemTotalPrice, 0);
  };

  numberOfProductsOfMultipleItems = () => {

  };

  hasDiscountWithMultipleItems = () => {

  };
}
